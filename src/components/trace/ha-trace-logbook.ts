import type { CSSResultGroup, TemplateResult } from "lit";
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators";
import type { LogbookEntry } from "../../data/logbook";
import type { HomeAssistant } from "../../types";
import "./hat-logbook-note";
import "../../panels/logbook/ha-logbook-renderer";
import type { TraceExtended } from "../../data/trace";

@customElement("ha-trace-logbook")
export class HaTraceLogbook extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @property({ type: Boolean, reflect: true }) public narrow = false;

  @property({ attribute: false }) public trace!: TraceExtended;

  @property({ attribute: false }) public logbookEntries!: LogbookEntry[];

  protected render(): TemplateResult {
    return this.logbookEntries.length
      ? html`
          <ha-logbook-renderer
            relative-time
            .hass=${this.hass}
            .entries=${this.logbookEntries}
            .narrow=${this.narrow}
          ></ha-logbook-renderer>
          <hat-logbook-note
            .hass=${this.hass}
            .domain=${this.trace.domain}
          ></hat-logbook-note>
        `
      : html`<div class="padded-box">
          No Logbook entries found for this step.
        </div>`;
  }

  static get styles(): CSSResultGroup {
    return [
      css`
        .padded-box {
          padding: 16px;
        }
      `,
    ];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ha-trace-logbook": HaTraceLogbook;
  }
}

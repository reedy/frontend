import { mdiInformationOutline } from "@mdi/js";
import type { CSSResultGroup } from "lit";
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators";
import { fireEvent } from "../../../../../common/dom/fire_event";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-svg-icon";
import { haStyle } from "../../../../../resources/styles";
import type { HomeAssistant } from "../../../../../types";

declare global {
  // for fire event
  interface HASSDomEvents {
    "button-click": undefined;
  }
}

@customElement("ha-backup-overview-onboarding")
class HaBackupOverviewBackups extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  private async _setup() {
    fireEvent(this, "button-click");
  }

  render() {
    return html`
      <ha-card>
        <div class="card-header">
          <div class="icon">
            <ha-svg-icon .path=${mdiInformationOutline}></ha-svg-icon>
          </div>
          Set up automatic backups
        </div>
        <div class="card-content">
          <p>
            Backups are essential to a reliable smart home. They protect your
            setup against failures and allows you to quickly have a working
            system again. It is recommended to create a daily backup and keep
            copies of the last 3 days on two different locations. And one of
            them is off-site.
          </p>
        </div>
        <div class="card-actions">
          <ha-button @click=${this._setup}>
            Set up automatic backups
          </ha-button>
        </div>
      </ha-card>
    `;
  }

  static get styles(): CSSResultGroup {
    return [
      haStyle,
      css`
        .card-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
        }
        .icon {
          position: relative;
          border-radius: 20px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .icon::before {
          display: block;
          content: "";
          position: absolute;
          inset: 0;
          background-color: var(--primary-color);
          opacity: 0.2;
        }
        .icon ha-svg-icon {
          color: var(--primary-color);
          width: 24px;
          height: 24px;
        }
        p {
          margin: 0;
        }
        .card-actions {
          display: flex;
          justify-content: flex-end;
          border-top: none;
        }
      `,
    ];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ha-backup-overview-onboarding": HaBackupOverviewBackups;
  }
}
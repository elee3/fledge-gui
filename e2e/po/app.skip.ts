import { browser, by, element } from 'protractor';
import { environment } from '../environment';

export class SkipLogin {
  EC = browser.ExpectedConditions;

  navigateToHome() {
    return browser.get('/');
  }

  setUpInstance() {
    browser.waitForAngularEnabled(false);
    element(by.css('select option[value="http"]')).click();
    element(by.id('host')).clear();
    element(by.id('host')).sendKeys(environment.HOST);
    element(by.id('service_port')).clear();
    element(by.id('service_port')).sendKeys(environment.SERVICE_PORT);
    element(by.id('set-url-restart-btn')).click();
    browser.waitForAngularEnabled(true);
  }

  getNavTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('#app .navbar-brand .navbar-item > b > a')).getText();
  }

  loginPageInputTag() {
    browser.ignoreSynchronization = true;
    return element.all(by.css('app-login form input')).count();
  }

  getLoginButton() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-login form button.is-info')).getText();
  }

  getAppStatus() {
    browser.ignoreSynchronization = true;
    return element(by.css('#app > app-root > div > app-navbar > nav > div.navbar-menu .icon.has-text-success')).isDisplayed();
  }

  getReceived() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-navbar .navbar-menu .navbar-start .field.is-grouped > div:nth-child(2)')).getText();
  }

  getSent() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-navbar .navbar-menu .navbar-start .field.is-grouped > div:nth-child(3)')).getText();
  }

  getUptime() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-navbar .navbar-menu .navbar-start .field.is-grouped > div:nth-child(4)')).getText();
  }

  isSelectTagPresent() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-dashboard div:nth-child(1) div.select.is-rounded')).isDisplayed();
  }

  isGraphDropdownPresent() {
    browser.ignoreSynchronization = true;
    return element(by.css('#graph-key-dropdown')).isDisplayed();
  }

  navToAssetReadings() {
    return browser.get('/#/asset');
  }

  getAssetTableHeader() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-assets table th:nth-child(1)')).getText();
  }

  getReadingsTableHeader() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-assets table th:nth-child(2)')).getText();
  }

  clickChartIcon() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-assets .table.is-striped > tbody:nth-child(2) > tr:nth-child(1) .fa-chart-line')).click();
  }

  isChartDisplayed() {
    browser.ignoreSynchronization = true;
    return element(by.css('.chartjs-render-monitor')).isDisplayed();
  }

  closeChartModal() {
    browser.ignoreSynchronization = true;
    return element(by.css('#chart_modal .modal-card > header > div > button')).click();
  }

  clickAssetChart() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-assets table tbody:nth-child(2) tr:nth-child(1) td:nth-child(4) a')).click();
  }

  getAssetChartInputTag() {
    browser.ignoreSynchronization = true;
    return element.all(by.css('#chart_modal .modal-card app-number-input-debounce input')).count();
  }

  navToAuditLogs() {
    return browser.get('/#/audit');
  }

  getAuditLogsTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('#card-title .title.is-5')).getText();
  }

  isAuditLogRefreshIcon() {
    browser.ignoreSynchronization = true;
    return element(by.css('#card-title .fa.fa-sync')).isDisplayed();
  }

  auditLogCount() {
    browser.ignoreSynchronization = true;
    return element(by.css('#card-title .subtitle.is-6')).getText();
  }

  getAuditLogsSelectTag() {
    browser.ignoreSynchronization = true;
    return element.all(by.css('app-audit-log div:nth-child(1) select')).count();
  }

  getAuditLogsInputTag() {
    browser.ignoreSynchronization = true;
    return element.all(by.css('app-audit-log input')).count();
  }

  navToSystemLogs() {
    return browser.get('/#/syslog');
  }

  getSystemLogTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('#card-title > div > div.column.is-9 > h5')).getText();
  }

  getSysLogRefreshButton() {
    browser.ignoreSynchronization = true;
    return element(by.css('#card-title .fa.fa-sync')).isDisplayed();
  }

  systemLogCount() {
    browser.ignoreSynchronization = true;
    return element(by.css('#card-title .subtitle.is-6')).getText();
  }

  getSystemtLogSelectTag() {
    browser.ignoreSynchronization = true;
    return element.all(by.css('app-system-log div:nth-child(1) select')).count();
  }

  getSystemLogInputTag() {
    browser.ignoreSynchronization = true;
    return element.all(by.css('app-system-log input')).count();
  }

  navigateToConfig() {
    return browser.get('/#/configuration');
  }

  clickAddButton() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-configuration-manager > div > div:nth-child(2) > header > div:nth-child(2) > a')).click();
  }

  navToScheduledTasks() {
    return browser.get('/#/schedules');
  }

  getSchedulesTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-scheduled-process .card-header p.card-header-title')).getText();
  }

  getSchedulesRefreshButton() {
    browser.ignoreSynchronization = true;
    return element(by.css('#scheduled-process .fa.fa-sync')).isDisplayed();
  }

  getCreateScheduleButton() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-scheduled-process .card-header .button.is-light')).getText();
  }

  closeAlert() {
    browser.ignoreSynchronization = true;
    element(by.css('#alert > button.delete')).click();
  }

  getTasksTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-scheduled-process app-list-tasks header > div')).getText();
  }

  getTasksRefreshButton() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-scheduled-process > div:nth-child(2) .fa.fa-sync')).isDisplayed();
  }

  getTasksSelectTag() {
    browser.ignoreSynchronization = true;
    return element.all(by.id('task-state')).count();
  }

  navToCertificateStore() {
    return browser.get('/#/certificate');
  }

  getCertificateStoreTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-cert-store > div > div > header > p')).getText();
  }

  getCertificateStoreRefreshButton() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-cert-store button i')).isDisplayed();
  }

  getCertificateStoreColNames() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-cert-store table thead tr')).getText();
  }

  getCertificateStoreImport() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-cert-store header a')).getText();
  }

  isKeyPresent() {
    browser.ignoreSynchronization = true;
    // wait
    browser.wait(this.EC.visibilityOf(element(by.css('app-cert-store table tr:nth-child(1) td:nth-child(2) .fa.fa-check-circle-o'))), 2000);
    return element(by.css('app-cert-store table tr:nth-child(1) td:nth-child(2) .fa.fa-check-circle-o')).isDisplayed();
  }

  isCertificatePresent() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-cert-store table tr:nth-child(1) td:nth-child(3) .fa.fa-check-circle-o')).isDisplayed();
  }

  navToBackupRestore() {
    return browser.get('/#/backup-restore');
  }

  clickRequestBackup() {
    browser.ignoreSynchronization = true;
    element(by.css('app-backup-restore .fix-pad')).click();
    // wait
    browser.wait(this.EC.visibilityOf(element(by.css('app-backup-restore table thead tr'))), 6000);
  }

  getBackupRestoreTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-backup-restore header p')).getText();
  }

  getBackupRestoreColNames() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-backup-restore table thead tr')).getText();
  }

  getRequestBackup() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-backup-restore header a')).getText();
  }

  deleteBackup() {
    browser.ignoreSynchronization = true;
    element(by.css('app-backup-restore .button.is-text')).click();
    browser.wait(this.EC.visibilityOf(element(by.css('.modal-card footer button.is-info'))), 2000);
    element(by.css('.modal-card footer button.is-info')).click();
    browser.wait(this.EC.visibilityOf(element(by.css('app-backup-restore .no-rec'))), 3000);
  }

  noBackupRecord() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-backup-restore .no-rec')).getText();
  }

  navToSupportBundles() {
    return browser.get('/#/support');
  }

  getSupportBundlesTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-support header p')).getText();
  }

  getSupportBundlesRefreshButton() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-support button i')).isDisplayed();
  }

  getRequestNewBundle() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-support header a')).getText();
  }

  requestNewBundle() {
    browser.ignoreSynchronization = true;
    element(by.css('app-support header a')).click();
    // wait
    browser.wait(this.EC.visibilityOf(element(by.id('alert'))), 2000);
    return element(by.id('alert')).getText();
  }

  navToSettings() {
    return browser.get('/#/setting');
  }

  getSettingsTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-settings > div > div:nth-child(1) .card-header-title')).getText();
  }

  getSettingsSelectTag() {
    browser.ignoreSynchronization = true;
    return element.all(by.css('app-settings .column .select #protocol')).count();
  }

  getSettingsHostInputTag() {
    browser.ignoreSynchronization = true;
    return element.all(by.css('app-settings div input#host')).count();
  }

  getSettingsPortInputTag() {
    browser.ignoreSynchronization = true;
    return element.all(by.css('app-settings div input#service_port')).count();
  }

  getSettingsSetUrlAndRestartButton() {
    browser.ignoreSynchronization = true;
    return element.all(by.css('app-settings #set-url-restart-btn'));
  }

  getGUISettingsDropdown() {
    browser.ignoreSynchronization = true;
    return element.all(by.css('app-settings .columns.is-multiline select'));
  }
}

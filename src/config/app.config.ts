interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Chef', 'Waiter', 'Wait Staff'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read restaurant information',
    'View menus',
    'View table availability',
    'View reservation status',
  ],
  ownerAbilities: ['Manage users', 'Manage restaurants', 'Manage menus', 'Manage reservations', 'Manage orders'],
  getQuoteUrl: 'https://app.roq.ai/proposal/e3c4e7ac-ccba-4f7e-8f2c-36f7e1672f33',
};

const config = {
  secret: 'SECRET_CODE',
  host: 'localhost',
  port: 8080,
  public: '../public/',
  paginate: {
    default: 10,
    max: 50
  },
  googleAPI: {
    developerToken: "N6aPLZxHRGDSplcGZiKWDQ",
    client_id: "280956389765-kr19ld07fbjukaqrji9eke96em13i9fa.apps.googleusercontent.com",
    client_secret: "qB3cGExUxGtKBuzDNIvLEvmQ",
    redirect_url: "http://localhost:4200/auth-verification"
  },
  facebookAPI: {
    appId: 'FACEBOOK_API_APP_ID',
    appSecret: 'FACEBOOK_API_APP_SECRET',
  },
  superMetrics: {
    functionsAPI: "SUPER_METRICS_FUNCTIONS_API",
    api: "SUPER_METRICS_API"
 },
  whitelist: ['WHITELIST'],
  database: {
    host: '206.189.26.21',
    user: 'root',
    password: 'password',
    database: 'powerads'
  },
  monitorInstanceActive: true,
  sendGridAPI: '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'
};

export config;

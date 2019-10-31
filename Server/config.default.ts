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
    developerToken: "GOOGLE_API_DEVELOPER_TOKEN",
    client_id: "GOOGLE_API_CLIENT_ID",
    client_secret: "GOOGLE_API_CLIENT_SECRET",
    redirect_url: "YOUR_APP_URL"
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
    host: 'database-host',
    user: 'database-user',
    password: 'database-password',
    database: 'database-name'
  },
  monitorInstanceActive: true,
  sendGridAPI: 'SEND_GRID_API'
};

export const templates = {
  GOOGLE_ADS_HISTORICAL_QUALITY_SCORE: 'YOUR_GOOGLE_ADS_HISTORICAL_REPORT',
  HIGH_LEVEL_PPC_REPORT: 'YOUR_HIGH_LEVEL_PPC_REPORT'
};

export default config;

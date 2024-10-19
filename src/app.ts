import path from 'path';
import favicon from 'serve-favicon';
import compress from 'compression';
import helmet from 'helmet';
import cors from 'cors';

import feathers from '@feathersjs/feathers';
import configuration from '@feathersjs/configuration';
import express from '@feathersjs/express';
import socketio from '@feathersjs/socketio';


import { Application } from './declarations';
import logger from './logger';
import middleware from './middleware';
import services from './services';
import appHooks from './app.hooks';
import channels from './channels';
import { HookContext as FeathersHookContext } from '@feathersjs/feathers';
import authentication from './authentication';
import mongoose from './mongoose';

import db_services from './db_services';
import { S3Utilities } from './utils/UploadUtilities/S3Utilities';

// Don't remove this comment. It's needed to format import lines nicely.

const app: Application = express(feathers());
export type HookContext<T = any> = { app: Application } & FeathersHookContext<T>;

// Load app configuration
app.configure(configuration());

// load env
app.set('aws', {
  accessKey: process.env.AWS_ACCESS_KEY_ID || '',
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  region: process.env.AWS_REGION || 'ap-south-1'
});
<<<<<<< HEAD
app.set('aws_s3_backet', process.env.BUCKET_NAME)
app.set('mongodb', process.env.MONGO_URL)
=======
app.set('aws_s3_backet', process.env.BUCKET_NAME);
app.set('mongodb', process.env.MONGO_URL);
>>>>>>> d0d74a8 (add google auth)

// Enable security, CORS, compression, favicon and body parsing
app.use(helmet({
  contentSecurityPolicy: false
}));
<<<<<<< HEAD
app.use(cors());
=======
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
>>>>>>> d0d74a8 (add google auth)
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', express.static(app.get('public')));

// Set up Plugins and providers
app.configure(express.rest());
app.configure(socketio());

app.configure(mongoose);

// Configure other middleware (see `middleware/index.ts`)
app.configure(middleware);
app.configure(authentication);

app.configure(db_services);
// Set up our services (see `services/index.ts`)
app.configure(services);
// Set up event channels (see channels.ts)
app.configure(channels);

// Appwrite
// app.configure(AppWrite.initializeAppWrite);
// S3
app.configure(S3Utilities.initializeS3);

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger } as any));

app.hooks(appHooks);

export default app;

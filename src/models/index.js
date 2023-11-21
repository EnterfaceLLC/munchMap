// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Event, Entree, Truck, Notification } = initSchema(schema);

export {
  Event,
  Entree,
  Truck,
  Notification
};
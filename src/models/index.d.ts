import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly image?: string | null;
  readonly date?: string | null;
  readonly timeStart?: string | null;
  readonly timeEnd?: string | null;
  readonly truckID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly image?: string | null;
  readonly date?: string | null;
  readonly timeStart?: string | null;
  readonly timeEnd?: string | null;
  readonly truckID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}

type EagerEntree = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Entree, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly price?: number | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly images?: (string | null)[] | null;
  readonly truckID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEntree = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Entree, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly price?: number | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly images?: (string | null)[] | null;
  readonly truckID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Entree = LazyLoading extends LazyLoadingDisabled ? EagerEntree : LazyEntree

export declare const Entree: (new (init: ModelInit<Entree>) => Entree) & {
  copyOf(source: Entree, mutator: (draft: MutableModel<Entree>) => MutableModel<Entree> | void): Entree;
}

type EagerTruck = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Truck, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly avatar?: string | null;
  readonly Entrees?: (Entree | null)[] | null;
  readonly Events?: (Event | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTruck = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Truck, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly avatar?: string | null;
  readonly Entrees: AsyncCollection<Entree>;
  readonly Events: AsyncCollection<Event>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Truck = LazyLoading extends LazyLoadingDisabled ? EagerTruck : LazyTruck

export declare const Truck: (new (init: ModelInit<Truck>) => Truck) & {
  copyOf(source: Truck, mutator: (draft: MutableModel<Truck>) => MutableModel<Truck> | void): Truck;
}

type EagerNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly body?: string | null;
  readonly data?: string | null;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly body?: string | null;
  readonly data?: string | null;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Notification = LazyLoading extends LazyLoadingDisabled ? EagerNotification : LazyNotification

export declare const Notification: (new (init: ModelInit<Notification>) => Notification) & {
  copyOf(source: Notification, mutator: (draft: MutableModel<Notification>) => MutableModel<Notification> | void): Notification;
}
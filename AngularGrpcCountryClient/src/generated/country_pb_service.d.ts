// package: v1
// file: country.proto

import * as country_pb from "./country_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CountryServiceGetAll = {
  readonly methodName: string;
  readonly service: typeof CountryService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof country_pb.EmptyRequest;
  readonly responseType: typeof country_pb.CountriesReply;
};

type CountryServiceGetById = {
  readonly methodName: string;
  readonly service: typeof CountryService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof country_pb.CountrySearchRequest;
  readonly responseType: typeof country_pb.CountryReply;
};

type CountryServiceCreate = {
  readonly methodName: string;
  readonly service: typeof CountryService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof country_pb.CountryCreateRequest;
  readonly responseType: typeof country_pb.CountryReply;
};

type CountryServiceUpdate = {
  readonly methodName: string;
  readonly service: typeof CountryService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof country_pb.CountryRequest;
  readonly responseType: typeof country_pb.CountryReply;
};

type CountryServiceDelete = {
  readonly methodName: string;
  readonly service: typeof CountryService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof country_pb.CountrySearchRequest;
  readonly responseType: typeof country_pb.EmptyReply;
};

export class CountryService {
  static readonly serviceName: string;
  static readonly GetAll: CountryServiceGetAll;
  static readonly GetById: CountryServiceGetById;
  static readonly Create: CountryServiceCreate;
  static readonly Update: CountryServiceUpdate;
  static readonly Delete: CountryServiceDelete;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CountryServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAll(
    requestMessage: country_pb.EmptyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: country_pb.CountriesReply|null) => void
  ): UnaryResponse;
  getAll(
    requestMessage: country_pb.EmptyRequest,
    callback: (error: ServiceError|null, responseMessage: country_pb.CountriesReply|null) => void
  ): UnaryResponse;
  getById(
    requestMessage: country_pb.CountrySearchRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: country_pb.CountryReply|null) => void
  ): UnaryResponse;
  getById(
    requestMessage: country_pb.CountrySearchRequest,
    callback: (error: ServiceError|null, responseMessage: country_pb.CountryReply|null) => void
  ): UnaryResponse;
  create(
    requestMessage: country_pb.CountryCreateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: country_pb.CountryReply|null) => void
  ): UnaryResponse;
  create(
    requestMessage: country_pb.CountryCreateRequest,
    callback: (error: ServiceError|null, responseMessage: country_pb.CountryReply|null) => void
  ): UnaryResponse;
  update(
    requestMessage: country_pb.CountryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: country_pb.CountryReply|null) => void
  ): UnaryResponse;
  update(
    requestMessage: country_pb.CountryRequest,
    callback: (error: ServiceError|null, responseMessage: country_pb.CountryReply|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: country_pb.CountrySearchRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: country_pb.EmptyReply|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: country_pb.CountrySearchRequest,
    callback: (error: ServiceError|null, responseMessage: country_pb.EmptyReply|null) => void
  ): UnaryResponse;
}


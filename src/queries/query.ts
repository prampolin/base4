//@ts-nocheck
import {
  useQuery,
  useMutation
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey
} from '@tanstack/react-query'
import { request } from '../services/axios';
export type SetDimmerTimerUnits = typeof SetDimmerTimerUnits[keyof typeof SetDimmerTimerUnits];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SetDimmerTimerUnits = {
  seconds: 'seconds',
  minutes: 'minutes',
  milliseconds: 'milliseconds',
} as const;

export type SetDimmerTimerParams = {
units?: SetDimmerTimerUnits;
};

export type GetDevicesParams = {
/**
 * number of records to skip
 */
skip?: number;
/**
 * max number of records to return
 */
limit?: number;
};

export interface DeviceRegistrationInfo {
  uri?: string;
  id?: string;
}

export interface WeatherForecast {
  summary?: string;
  description?: string;
  icon?: string;
}

export interface ForecastTemperature {
  low?: number;
  high?: number;
  morning?: number;
  day?: number;
  evening?: number;
  night?: number;
}

export interface City {
  id?: number;
  name?: string;
  lat?: number;
  lon?: number;
  country?: string;
}

export interface Forecast {
  date?: string;
  pressure?: number;
  humidity?: number;
  windSpeed?: number;
  clouds?: number;
  temperature?: ForecastTemperature;
  weather?: WeatherForecast;
}

export interface ForecastResponse {
  city?: City;
  values?: Forecast[];
}

export interface DeviceState {
  id?: string;
  name?: string;
  lastUpdate?: string;
  level?: number;
}

export interface HeaterState {
  id?: string;
  state?: string;
}

export interface ApiResponse {
  code?: number;
  message?: string;
}

/**
 * the temperature units
 */
export type TemperatueZoneStatusUnits = typeof TemperatueZoneStatusUnits[keyof typeof TemperatueZoneStatusUnits];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const TemperatueZoneStatusUnits = {
  celsius: 'celsius',
  fahrenheit: 'fahrenheit',
} as const;

/**
 * status of a single zone
 */
export interface TemperatueZoneStatus {
  /** the unique identifier for the zone */
  id: string;
  /** the name of the zone */
  name?: string;
  /** the temperature in the zone */
  value: number;
  /** the temperature units */
  units?: TemperatueZoneStatusUnits;
  /** the timestamp when the temperature was measured */
  timestamp: string;
}

/**
 * a single temperature zone
 */
export interface TemperatureZone {
  /** the unique identifier for the zone */
  id: number;
  name: string;
  inputPosition?: number;
  outputPosition?: number;
  zone?: string;
}

/**
 * ok
 */
export interface TemperatureSummary {
  zones?: TemperatureZone[];
  zoneStatus?: TemperatueZoneStatus[];
}

/**
 * the status of the lighting zone.
 */
export interface LightingZoneStatus {
  id?: string;
  name?: string;
  lastUpdate?: string;
  level?: number;
}

export type LightingZoneDeviceType = typeof LightingZoneDeviceType[keyof typeof LightingZoneDeviceType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LightingZoneDeviceType = {
  dimmer: 'dimmer',
  switch: 'switch',
} as const;

export interface LightingZone {
  id?: string;
  name?: string;
  deviceId?: number;
  deviceType?: LightingZoneDeviceType;
  zone?: string;
}

/**
 * ok
 */
export interface LightingSummary {
  zones?: LightingZone[];
  zoneStatus?: LightingZoneStatus[];
}




// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

/**
 * returns all registered devices
 */
export const getDevices = (
    params?: GetDevicesParams,
 options?: SecondParameter<typeof request>,signal?: AbortSignal
) => {
      return request<string[]>(
      {url: `/devices`, method: 'get',
        params, signal
    },
      options);
    }
  

export const getGetDevicesQueryKey = (params?: GetDevicesParams,) => [`/devices`, ...(params ? [params]: [])] as const;
  

    
export const getGetDevicesQueryOptions = <TData = Awaited<ReturnType<typeof getDevices>>, TError = unknown>(params?: GetDevicesParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getDevices>>, TError, TData>, request?: SecondParameter<typeof request>}
): UseQueryOptions<Awaited<ReturnType<typeof getDevices>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetDevicesQueryKey(params);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getDevices>>> = ({ signal }) => getDevices(params, requestOptions, signal);
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetDevicesQueryResult = NonNullable<Awaited<ReturnType<typeof getDevices>>>
export type GetDevicesQueryError = unknown

export const useGetDevices = <TData = Awaited<ReturnType<typeof getDevices>>, TError = unknown>(
 params?: GetDevicesParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getDevices>>, TError, TData>, request?: SecondParameter<typeof request>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetDevicesQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}


export const register = (
    deviceRegistrationInfo: DeviceRegistrationInfo,
 options?: SecondParameter<typeof request>,) => {
      return request<void>(
      {url: `/devices`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: deviceRegistrationInfo
    },
      options);
    }
  


export const getRegisterMutationOptions = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof register>>, TError,{data: DeviceRegistrationInfo}, TContext>, request?: SecondParameter<typeof request>}
): UseMutationOptions<Awaited<ReturnType<typeof register>>, TError,{data: DeviceRegistrationInfo}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof register>>, {data: DeviceRegistrationInfo}> = (props) => {
          const {data} = props ?? {};

          return  register(data,requestOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type RegisterMutationResult = NonNullable<Awaited<ReturnType<typeof register>>>
    export type RegisterMutationBody = DeviceRegistrationInfo
    export type RegisterMutationError = unknown

    export const useRegister = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof register>>, TError,{data: DeviceRegistrationInfo}, TContext>, request?: SecondParameter<typeof request>}
) => {
    
      const mutationOptions = getRegisterMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    
export const setDimmer = (
    deviceId: string,
    value: number,
 options?: SecondParameter<typeof request>,) => {
      return request<ApiResponse>(
      {url: `/lighting/dimmers/${deviceId}/${value}`, method: 'post'
    },
      options);
    }
  


export const getSetDimmerMutationOptions = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof setDimmer>>, TError,{deviceId: string;value: number}, TContext>, request?: SecondParameter<typeof request>}
): UseMutationOptions<Awaited<ReturnType<typeof setDimmer>>, TError,{deviceId: string;value: number}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof setDimmer>>, {deviceId: string;value: number}> = (props) => {
          const {deviceId,value} = props ?? {};

          return  setDimmer(deviceId,value,requestOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type SetDimmerMutationResult = NonNullable<Awaited<ReturnType<typeof setDimmer>>>
    
    export type SetDimmerMutationError = unknown

    export const useSetDimmer = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof setDimmer>>, TError,{deviceId: string;value: number}, TContext>, request?: SecondParameter<typeof request>}
) => {
    
      const mutationOptions = getSetDimmerMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    
/**
 * sets a dimmer to a specific value on a timer
 */
export const setDimmerTimer = (
    deviceId: string,
    value: number,
    timeunit: number,
    params?: SetDimmerTimerParams,
 options?: SecondParameter<typeof request>,) => {
      return request<ApiResponse>(
      {url: `/lighting/dimmers/${deviceId}/${value}/timer/${timeunit}`, method: 'post',
        params
    },
      options);
    }
  


export const getSetDimmerTimerMutationOptions = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof setDimmerTimer>>, TError,{deviceId: string;value: number;timeunit: number;params?: SetDimmerTimerParams}, TContext>, request?: SecondParameter<typeof request>}
): UseMutationOptions<Awaited<ReturnType<typeof setDimmerTimer>>, TError,{deviceId: string;value: number;timeunit: number;params?: SetDimmerTimerParams}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof setDimmerTimer>>, {deviceId: string;value: number;timeunit: number;params?: SetDimmerTimerParams}> = (props) => {
          const {deviceId,value,timeunit,params} = props ?? {};

          return  setDimmerTimer(deviceId,value,timeunit,params,requestOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type SetDimmerTimerMutationResult = NonNullable<Awaited<ReturnType<typeof setDimmerTimer>>>
    
    export type SetDimmerTimerMutationError = unknown

    export const useSetDimmerTimer = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof setDimmerTimer>>, TError,{deviceId: string;value: number;timeunit: number;params?: SetDimmerTimerParams}, TContext>, request?: SecondParameter<typeof request>}
) => {
    
      const mutationOptions = getSetDimmerTimerMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    
export const getSwitchState = (
    deviceId: string,
 options?: SecondParameter<typeof request>,signal?: AbortSignal
) => {
      return request<DeviceState>(
      {url: `/lighting/switches/${deviceId}`, method: 'get', signal
    },
      options);
    }
  

export const getGetSwitchStateQueryKey = (deviceId: string,) => [`/lighting/switches/${deviceId}`] as const;
  

    
export const getGetSwitchStateQueryOptions = <TData = Awaited<ReturnType<typeof getSwitchState>>, TError = unknown>(deviceId: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getSwitchState>>, TError, TData>, request?: SecondParameter<typeof request>}
): UseQueryOptions<Awaited<ReturnType<typeof getSwitchState>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetSwitchStateQueryKey(deviceId);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getSwitchState>>> = ({ signal }) => getSwitchState(deviceId, requestOptions, signal);
    
      
      
   return  { queryKey, queryFn, enabled: !!(deviceId), ...queryOptions}}

export type GetSwitchStateQueryResult = NonNullable<Awaited<ReturnType<typeof getSwitchState>>>
export type GetSwitchStateQueryError = unknown

export const useGetSwitchState = <TData = Awaited<ReturnType<typeof getSwitchState>>, TError = unknown>(
 deviceId: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getSwitchState>>, TError, TData>, request?: SecondParameter<typeof request>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetSwitchStateQueryOptions(deviceId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}


export const setSwitch = (
    deviceId: string,
    value: 'true' | 'false',
 options?: SecondParameter<typeof request>,) => {
      return request<ApiResponse>(
      {url: `/lighting/switches/${deviceId}/${value}`, method: 'post'
    },
      options);
    }
  


export const getSetSwitchMutationOptions = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof setSwitch>>, TError,{deviceId: string;value: 'true' | 'false'}, TContext>, request?: SecondParameter<typeof request>}
): UseMutationOptions<Awaited<ReturnType<typeof setSwitch>>, TError,{deviceId: string;value: 'true' | 'false'}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof setSwitch>>, {deviceId: string;value: 'true' | 'false'}> = (props) => {
          const {deviceId,value} = props ?? {};

          return  setSwitch(deviceId,value,requestOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type SetSwitchMutationResult = NonNullable<Awaited<ReturnType<typeof setSwitch>>>
    
    export type SetSwitchMutationError = unknown

    export const useSetSwitch = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof setSwitch>>, TError,{deviceId: string;value: 'true' | 'false'}, TContext>, request?: SecondParameter<typeof request>}
) => {
    
      const mutationOptions = getSetSwitchMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    
/**
 * sets a switch to a specific value on a timer
 */
export const setSwitchTimer = (
    deviceId: string,
    value: 'true' | 'false',
    minutes: number,
 options?: SecondParameter<typeof request>,) => {
      return request<ApiResponse>(
      {url: `/lighting/switches/${deviceId}/${value}/timer/${minutes}`, method: 'post'
    },
      options);
    }
  


export const getSetSwitchTimerMutationOptions = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof setSwitchTimer>>, TError,{deviceId: string;value: 'true' | 'false';minutes: number}, TContext>, request?: SecondParameter<typeof request>}
): UseMutationOptions<Awaited<ReturnType<typeof setSwitchTimer>>, TError,{deviceId: string;value: 'true' | 'false';minutes: number}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof setSwitchTimer>>, {deviceId: string;value: 'true' | 'false';minutes: number}> = (props) => {
          const {deviceId,value,minutes} = props ?? {};

          return  setSwitchTimer(deviceId,value,minutes,requestOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type SetSwitchTimerMutationResult = NonNullable<Awaited<ReturnType<typeof setSwitchTimer>>>
    
    export type SetSwitchTimerMutationError = unknown

    export const useSetSwitchTimer = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof setSwitchTimer>>, TError,{deviceId: string;value: 'true' | 'false';minutes: number}, TContext>, request?: SecondParameter<typeof request>}
) => {
    
      const mutationOptions = getSetSwitchTimerMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    
export const getLightingSummary = (
    
 options?: SecondParameter<typeof request>,signal?: AbortSignal
) => {
      return request<LightingSummary>(
      {url: `/lightingSummary`, method: 'get', signal
    },
      options);
    }
  

export const getGetLightingSummaryQueryKey = () => [`/lightingSummary`] as const;
  

    
export const getGetLightingSummaryQueryOptions = <TData = Awaited<ReturnType<typeof getLightingSummary>>, TError = unknown>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getLightingSummary>>, TError, TData>, request?: SecondParameter<typeof request>}
): UseQueryOptions<Awaited<ReturnType<typeof getLightingSummary>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetLightingSummaryQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getLightingSummary>>> = ({ signal }) => getLightingSummary(requestOptions, signal);
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetLightingSummaryQueryResult = NonNullable<Awaited<ReturnType<typeof getLightingSummary>>>
export type GetLightingSummaryQueryError = unknown

export const useGetLightingSummary = <TData = Awaited<ReturnType<typeof getLightingSummary>>, TError = unknown>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getLightingSummary>>, TError, TData>, request?: SecondParameter<typeof request>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetLightingSummaryQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}


export const temperatureSummary = (
    
 options?: SecondParameter<typeof request>,signal?: AbortSignal
) => {
      return request<TemperatureSummary>(
      {url: `/temperature`, method: 'get', signal
    },
      options);
    }
  

export const getTemperatureSummaryQueryKey = () => [`/temperature`] as const;
  

    
export const getTemperatureSummaryQueryOptions = <TData = Awaited<ReturnType<typeof temperatureSummary>>, TError = unknown>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof temperatureSummary>>, TError, TData>, request?: SecondParameter<typeof request>}
): UseQueryOptions<Awaited<ReturnType<typeof temperatureSummary>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getTemperatureSummaryQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof temperatureSummary>>> = ({ signal }) => temperatureSummary(requestOptions, signal);
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type TemperatureSummaryQueryResult = NonNullable<Awaited<ReturnType<typeof temperatureSummary>>>
export type TemperatureSummaryQueryError = unknown

export const useTemperatureSummary = <TData = Awaited<ReturnType<typeof temperatureSummary>>, TError = unknown>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof temperatureSummary>>, TError, TData>, request?: SecondParameter<typeof request>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getTemperatureSummaryQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}


export const getForecast = (
    days: number,
 options?: SecondParameter<typeof request>,signal?: AbortSignal
) => {
      return request<ForecastResponse>(
      {url: `/temperature/forecast/${days}`, method: 'get', signal
    },
      options);
    }
  

export const getGetForecastQueryKey = (days: number,) => [`/temperature/forecast/${days}`] as const;
  

    
export const getGetForecastQueryOptions = <TData = Awaited<ReturnType<typeof getForecast>>, TError = unknown>(days: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getForecast>>, TError, TData>, request?: SecondParameter<typeof request>}
): UseQueryOptions<Awaited<ReturnType<typeof getForecast>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetForecastQueryKey(days);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getForecast>>> = ({ signal }) => getForecast(days, requestOptions, signal);
    
      
      
   return  { queryKey, queryFn, enabled: !!(days), ...queryOptions}}

export type GetForecastQueryResult = NonNullable<Awaited<ReturnType<typeof getForecast>>>
export type GetForecastQueryError = unknown

export const useGetForecast = <TData = Awaited<ReturnType<typeof getForecast>>, TError = unknown>(
 days: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getForecast>>, TError, TData>, request?: SecondParameter<typeof request>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetForecastQueryOptions(days,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}


export const getZoneTemperature = (
    zoneId: string,
 options?: SecondParameter<typeof request>,signal?: AbortSignal
) => {
      return request<TemperatueZoneStatus>(
      {url: `/temperature/${zoneId}`, method: 'get', signal
    },
      options);
    }
  

export const getGetZoneTemperatureQueryKey = (zoneId: string,) => [`/temperature/${zoneId}`] as const;
  

    
export const getGetZoneTemperatureQueryOptions = <TData = Awaited<ReturnType<typeof getZoneTemperature>>, TError = unknown>(zoneId: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getZoneTemperature>>, TError, TData>, request?: SecondParameter<typeof request>}
): UseQueryOptions<Awaited<ReturnType<typeof getZoneTemperature>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetZoneTemperatureQueryKey(zoneId);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getZoneTemperature>>> = ({ signal }) => getZoneTemperature(zoneId, requestOptions, signal);
    
      
      
   return  { queryKey, queryFn, enabled: !!(zoneId), ...queryOptions}}

export type GetZoneTemperatureQueryResult = NonNullable<Awaited<ReturnType<typeof getZoneTemperature>>>
export type GetZoneTemperatureQueryError = unknown

export const useGetZoneTemperature = <TData = Awaited<ReturnType<typeof getZoneTemperature>>, TError = unknown>(
 zoneId: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getZoneTemperature>>, TError, TData>, request?: SecondParameter<typeof request>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetZoneTemperatureQueryOptions(zoneId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}


/**
 * gets the state of the heater
 */
export const getHeaterState = (
    zoneId: string,
 options?: SecondParameter<typeof request>,signal?: AbortSignal
) => {
      return request<HeaterState>(
      {url: `/temperature/${zoneId}/heater`, method: 'get', signal
    },
      options);
    }
  

export const getGetHeaterStateQueryKey = (zoneId: string,) => [`/temperature/${zoneId}/heater`] as const;
  

    
export const getGetHeaterStateQueryOptions = <TData = Awaited<ReturnType<typeof getHeaterState>>, TError = unknown>(zoneId: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getHeaterState>>, TError, TData>, request?: SecondParameter<typeof request>}
): UseQueryOptions<Awaited<ReturnType<typeof getHeaterState>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetHeaterStateQueryKey(zoneId);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getHeaterState>>> = ({ signal }) => getHeaterState(zoneId, requestOptions, signal);
    
      
      
   return  { queryKey, queryFn, enabled: !!(zoneId), ...queryOptions}}

export type GetHeaterStateQueryResult = NonNullable<Awaited<ReturnType<typeof getHeaterState>>>
export type GetHeaterStateQueryError = unknown

export const useGetHeaterState = <TData = Awaited<ReturnType<typeof getHeaterState>>, TError = unknown>(
 zoneId: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getHeaterState>>, TError, TData>, request?: SecondParameter<typeof request>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetHeaterStateQueryOptions(zoneId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}


/**
 * turns the heater on or off
 */
export const setHeaterState = (
    zoneId: string,
    state: 'false' | 'true',
 options?: SecondParameter<typeof request>,) => {
      return request<ApiResponse>(
      {url: `/temperature/${zoneId}/heater/${state}`, method: 'post'
    },
      options);
    }
  


export const getSetHeaterStateMutationOptions = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof setHeaterState>>, TError,{zoneId: string;state: 'false' | 'true'}, TContext>, request?: SecondParameter<typeof request>}
): UseMutationOptions<Awaited<ReturnType<typeof setHeaterState>>, TError,{zoneId: string;state: 'false' | 'true'}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof setHeaterState>>, {zoneId: string;state: 'false' | 'true'}> = (props) => {
          const {zoneId,state} = props ?? {};

          return  setHeaterState(zoneId,state,requestOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type SetHeaterStateMutationResult = NonNullable<Awaited<ReturnType<typeof setHeaterState>>>
    
    export type SetHeaterStateMutationError = unknown

    export const useSetHeaterState = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof setHeaterState>>, TError,{zoneId: string;state: 'false' | 'true'}, TContext>, request?: SecondParameter<typeof request>}
) => {
    
      const mutationOptions = getSetHeaterStateMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    
export const getZones = (
    
 options?: SecondParameter<typeof request>,signal?: AbortSignal
) => {
      return request<string[]>(
      {url: `/zones`, method: 'get', signal
    },
      options);
    }
  

export const getGetZonesQueryKey = () => [`/zones`] as const;
  

    
export const getGetZonesQueryOptions = <TData = Awaited<ReturnType<typeof getZones>>, TError = unknown>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getZones>>, TError, TData>, request?: SecondParameter<typeof request>}
): UseQueryOptions<Awaited<ReturnType<typeof getZones>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetZonesQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getZones>>> = ({ signal }) => getZones(requestOptions, signal);
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetZonesQueryResult = NonNullable<Awaited<ReturnType<typeof getZones>>>
export type GetZonesQueryError = unknown

export const useGetZones = <TData = Awaited<ReturnType<typeof getZones>>, TError = unknown>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getZones>>, TError, TData>, request?: SecondParameter<typeof request>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetZonesQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}


export const quietZone = (
    zoneId: 'basement' | 'first-floor' | 'second-floor',
 options?: SecondParameter<typeof request>,signal?: AbortSignal
) => {
      return request<void>(
      {url: `/zones/${zoneId}/quiet`, method: 'get', signal
    },
      options);
    }
  

export const getQuietZoneQueryKey = (zoneId: 'basement' | 'first-floor' | 'second-floor',) => [`/zones/${zoneId}/quiet`] as const;
  

    
export const getQuietZoneQueryOptions = <TData = Awaited<ReturnType<typeof quietZone>>, TError = unknown>(zoneId: 'basement' | 'first-floor' | 'second-floor', options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof quietZone>>, TError, TData>, request?: SecondParameter<typeof request>}
): UseQueryOptions<Awaited<ReturnType<typeof quietZone>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getQuietZoneQueryKey(zoneId);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof quietZone>>> = ({ signal }) => quietZone(zoneId, requestOptions, signal);
    
      
      
   return  { queryKey, queryFn, enabled: !!(zoneId), ...queryOptions}}

export type QuietZoneQueryResult = NonNullable<Awaited<ReturnType<typeof quietZone>>>
export type QuietZoneQueryError = unknown

export const useQuietZone = <TData = Awaited<ReturnType<typeof quietZone>>, TError = unknown>(
 zoneId: 'basement' | 'first-floor' | 'second-floor', options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof quietZone>>, TError, TData>, request?: SecondParameter<typeof request>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getQuietZoneQueryOptions(zoneId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



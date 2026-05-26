
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Utilisateur
 * 
 */
export type Utilisateur = $Result.DefaultSelection<Prisma.$UtilisateurPayload>
/**
 * Model Auteur
 * 
 */
export type Auteur = $Result.DefaultSelection<Prisma.$AuteurPayload>
/**
 * Model Livre
 * 
 */
export type Livre = $Result.DefaultSelection<Prisma.$LivrePayload>
/**
 * Model Categorie
 * 
 */
export type Categorie = $Result.DefaultSelection<Prisma.$CategoriePayload>
/**
 * Model LivreCategorie
 * 
 */
export type LivreCategorie = $Result.DefaultSelection<Prisma.$LivreCategoriePayload>
/**
 * Model Emprunt
 * 
 */
export type Emprunt = $Result.DefaultSelection<Prisma.$EmpruntPayload>
/**
 * Model Avis
 * 
 */
export type Avis = $Result.DefaultSelection<Prisma.$AvisPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatutEmprunt: {
  EN_COURS: 'EN_COURS',
  RENDU: 'RENDU'
};

export type StatutEmprunt = (typeof StatutEmprunt)[keyof typeof StatutEmprunt]

}

export type StatutEmprunt = $Enums.StatutEmprunt

export const StatutEmprunt: typeof $Enums.StatutEmprunt

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Utilisateurs
 * const utilisateurs = await prisma.utilisateur.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Utilisateurs
   * const utilisateurs = await prisma.utilisateur.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.utilisateur`: Exposes CRUD operations for the **Utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auteur`: Exposes CRUD operations for the **Auteur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auteurs
    * const auteurs = await prisma.auteur.findMany()
    * ```
    */
  get auteur(): Prisma.AuteurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.livre`: Exposes CRUD operations for the **Livre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Livres
    * const livres = await prisma.livre.findMany()
    * ```
    */
  get livre(): Prisma.LivreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorie`: Exposes CRUD operations for the **Categorie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categorie.findMany()
    * ```
    */
  get categorie(): Prisma.CategorieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.livreCategorie`: Exposes CRUD operations for the **LivreCategorie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LivreCategories
    * const livreCategories = await prisma.livreCategorie.findMany()
    * ```
    */
  get livreCategorie(): Prisma.LivreCategorieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emprunt`: Exposes CRUD operations for the **Emprunt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emprunts
    * const emprunts = await prisma.emprunt.findMany()
    * ```
    */
  get emprunt(): Prisma.EmpruntDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avis`: Exposes CRUD operations for the **Avis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avis
    * const avis = await prisma.avis.findMany()
    * ```
    */
  get avis(): Prisma.AvisDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Utilisateur: 'Utilisateur',
    Auteur: 'Auteur',
    Livre: 'Livre',
    Categorie: 'Categorie',
    LivreCategorie: 'LivreCategorie',
    Emprunt: 'Emprunt',
    Avis: 'Avis'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "utilisateur" | "auteur" | "livre" | "categorie" | "livreCategorie" | "emprunt" | "avis"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Utilisateur: {
        payload: Prisma.$UtilisateurPayload<ExtArgs>
        fields: Prisma.UtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findFirst: {
            args: Prisma.UtilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findMany: {
            args: Prisma.UtilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          create: {
            args: Prisma.UtilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          createMany: {
            args: Prisma.UtilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UtilisateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          delete: {
            args: Prisma.UtilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          update: {
            args: Prisma.UtilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UtilisateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          upsert: {
            args: Prisma.UtilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.UtilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Auteur: {
        payload: Prisma.$AuteurPayload<ExtArgs>
        fields: Prisma.AuteurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuteurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuteurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuteurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuteurPayload>
          }
          findFirst: {
            args: Prisma.AuteurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuteurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuteurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuteurPayload>
          }
          findMany: {
            args: Prisma.AuteurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuteurPayload>[]
          }
          create: {
            args: Prisma.AuteurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuteurPayload>
          }
          createMany: {
            args: Prisma.AuteurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuteurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuteurPayload>[]
          }
          delete: {
            args: Prisma.AuteurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuteurPayload>
          }
          update: {
            args: Prisma.AuteurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuteurPayload>
          }
          deleteMany: {
            args: Prisma.AuteurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuteurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuteurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuteurPayload>[]
          }
          upsert: {
            args: Prisma.AuteurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuteurPayload>
          }
          aggregate: {
            args: Prisma.AuteurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuteur>
          }
          groupBy: {
            args: Prisma.AuteurGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuteurGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuteurCountArgs<ExtArgs>
            result: $Utils.Optional<AuteurCountAggregateOutputType> | number
          }
        }
      }
      Livre: {
        payload: Prisma.$LivrePayload<ExtArgs>
        fields: Prisma.LivreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LivreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LivreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrePayload>
          }
          findFirst: {
            args: Prisma.LivreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LivreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrePayload>
          }
          findMany: {
            args: Prisma.LivreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrePayload>[]
          }
          create: {
            args: Prisma.LivreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrePayload>
          }
          createMany: {
            args: Prisma.LivreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LivreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrePayload>[]
          }
          delete: {
            args: Prisma.LivreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrePayload>
          }
          update: {
            args: Prisma.LivreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrePayload>
          }
          deleteMany: {
            args: Prisma.LivreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LivreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LivreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrePayload>[]
          }
          upsert: {
            args: Prisma.LivreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrePayload>
          }
          aggregate: {
            args: Prisma.LivreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLivre>
          }
          groupBy: {
            args: Prisma.LivreGroupByArgs<ExtArgs>
            result: $Utils.Optional<LivreGroupByOutputType>[]
          }
          count: {
            args: Prisma.LivreCountArgs<ExtArgs>
            result: $Utils.Optional<LivreCountAggregateOutputType> | number
          }
        }
      }
      Categorie: {
        payload: Prisma.$CategoriePayload<ExtArgs>
        fields: Prisma.CategorieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategorieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategorieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          findFirst: {
            args: Prisma.CategorieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategorieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          findMany: {
            args: Prisma.CategorieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          create: {
            args: Prisma.CategorieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          createMany: {
            args: Prisma.CategorieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategorieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          delete: {
            args: Prisma.CategorieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          update: {
            args: Prisma.CategorieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          deleteMany: {
            args: Prisma.CategorieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategorieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategorieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          upsert: {
            args: Prisma.CategorieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          aggregate: {
            args: Prisma.CategorieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorie>
          }
          groupBy: {
            args: Prisma.CategorieGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategorieGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategorieCountArgs<ExtArgs>
            result: $Utils.Optional<CategorieCountAggregateOutputType> | number
          }
        }
      }
      LivreCategorie: {
        payload: Prisma.$LivreCategoriePayload<ExtArgs>
        fields: Prisma.LivreCategorieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LivreCategorieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivreCategoriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LivreCategorieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivreCategoriePayload>
          }
          findFirst: {
            args: Prisma.LivreCategorieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivreCategoriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LivreCategorieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivreCategoriePayload>
          }
          findMany: {
            args: Prisma.LivreCategorieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivreCategoriePayload>[]
          }
          create: {
            args: Prisma.LivreCategorieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivreCategoriePayload>
          }
          createMany: {
            args: Prisma.LivreCategorieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LivreCategorieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivreCategoriePayload>[]
          }
          delete: {
            args: Prisma.LivreCategorieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivreCategoriePayload>
          }
          update: {
            args: Prisma.LivreCategorieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivreCategoriePayload>
          }
          deleteMany: {
            args: Prisma.LivreCategorieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LivreCategorieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LivreCategorieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivreCategoriePayload>[]
          }
          upsert: {
            args: Prisma.LivreCategorieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivreCategoriePayload>
          }
          aggregate: {
            args: Prisma.LivreCategorieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLivreCategorie>
          }
          groupBy: {
            args: Prisma.LivreCategorieGroupByArgs<ExtArgs>
            result: $Utils.Optional<LivreCategorieGroupByOutputType>[]
          }
          count: {
            args: Prisma.LivreCategorieCountArgs<ExtArgs>
            result: $Utils.Optional<LivreCategorieCountAggregateOutputType> | number
          }
        }
      }
      Emprunt: {
        payload: Prisma.$EmpruntPayload<ExtArgs>
        fields: Prisma.EmpruntFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpruntFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpruntFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload>
          }
          findFirst: {
            args: Prisma.EmpruntFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpruntFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload>
          }
          findMany: {
            args: Prisma.EmpruntFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload>[]
          }
          create: {
            args: Prisma.EmpruntCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload>
          }
          createMany: {
            args: Prisma.EmpruntCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmpruntCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload>[]
          }
          delete: {
            args: Prisma.EmpruntDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload>
          }
          update: {
            args: Prisma.EmpruntUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload>
          }
          deleteMany: {
            args: Prisma.EmpruntDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpruntUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmpruntUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload>[]
          }
          upsert: {
            args: Prisma.EmpruntUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntPayload>
          }
          aggregate: {
            args: Prisma.EmpruntAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmprunt>
          }
          groupBy: {
            args: Prisma.EmpruntGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpruntGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpruntCountArgs<ExtArgs>
            result: $Utils.Optional<EmpruntCountAggregateOutputType> | number
          }
        }
      }
      Avis: {
        payload: Prisma.$AvisPayload<ExtArgs>
        fields: Prisma.AvisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          findFirst: {
            args: Prisma.AvisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          findMany: {
            args: Prisma.AvisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>[]
          }
          create: {
            args: Prisma.AvisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          createMany: {
            args: Prisma.AvisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>[]
          }
          delete: {
            args: Prisma.AvisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          update: {
            args: Prisma.AvisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          deleteMany: {
            args: Prisma.AvisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>[]
          }
          upsert: {
            args: Prisma.AvisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          aggregate: {
            args: Prisma.AvisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvis>
          }
          groupBy: {
            args: Prisma.AvisGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvisGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvisCountArgs<ExtArgs>
            result: $Utils.Optional<AvisCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    utilisateur?: UtilisateurOmit
    auteur?: AuteurOmit
    livre?: LivreOmit
    categorie?: CategorieOmit
    livreCategorie?: LivreCategorieOmit
    emprunt?: EmpruntOmit
    avis?: AvisOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UtilisateurCountOutputType
   */

  export type UtilisateurCountOutputType = {
    emprunts: number
    avis: number
  }

  export type UtilisateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprunts?: boolean | UtilisateurCountOutputTypeCountEmpruntsArgs
    avis?: boolean | UtilisateurCountOutputTypeCountAvisArgs
  }

  // Custom InputTypes
  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisateurCountOutputType
     */
    select?: UtilisateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountEmpruntsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpruntWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountAvisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvisWhereInput
  }


  /**
   * Count Type AuteurCountOutputType
   */

  export type AuteurCountOutputType = {
    livres: number
  }

  export type AuteurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livres?: boolean | AuteurCountOutputTypeCountLivresArgs
  }

  // Custom InputTypes
  /**
   * AuteurCountOutputType without action
   */
  export type AuteurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuteurCountOutputType
     */
    select?: AuteurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuteurCountOutputType without action
   */
  export type AuteurCountOutputTypeCountLivresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivreWhereInput
  }


  /**
   * Count Type LivreCountOutputType
   */

  export type LivreCountOutputType = {
    categories: number
    emprunts: number
    avis: number
  }

  export type LivreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | LivreCountOutputTypeCountCategoriesArgs
    emprunts?: boolean | LivreCountOutputTypeCountEmpruntsArgs
    avis?: boolean | LivreCountOutputTypeCountAvisArgs
  }

  // Custom InputTypes
  /**
   * LivreCountOutputType without action
   */
  export type LivreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivreCountOutputType
     */
    select?: LivreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LivreCountOutputType without action
   */
  export type LivreCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivreCategorieWhereInput
  }

  /**
   * LivreCountOutputType without action
   */
  export type LivreCountOutputTypeCountEmpruntsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpruntWhereInput
  }

  /**
   * LivreCountOutputType without action
   */
  export type LivreCountOutputTypeCountAvisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvisWhereInput
  }


  /**
   * Count Type CategorieCountOutputType
   */

  export type CategorieCountOutputType = {
    livres: number
  }

  export type CategorieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livres?: boolean | CategorieCountOutputTypeCountLivresArgs
  }

  // Custom InputTypes
  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieCountOutputType
     */
    select?: CategorieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeCountLivresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivreCategorieWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurAvgAggregateOutputType = {
    id: number | null
  }

  export type UtilisateurSumAggregateOutputType = {
    id: number | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id: number | null
    nom: string | null
    email: string | null
    dateCreation: Date | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    email: string | null
    dateCreation: Date | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id: number
    nom: number
    email: number
    dateCreation: number
    _all: number
  }


  export type UtilisateurAvgAggregateInputType = {
    id?: true
  }

  export type UtilisateurSumAggregateInputType = {
    id?: true
  }

  export type UtilisateurMinAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    dateCreation?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    dateCreation?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    dateCreation?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateur to aggregate.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilisateurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilisateurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type UtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithAggregationInput | UtilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: UtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _avg?: UtilisateurAvgAggregateInputType
    _sum?: UtilisateurSumAggregateInputType
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id: number
    nom: string
    email: string
    dateCreation: Date
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends UtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    dateCreation?: boolean
    emprunts?: boolean | Utilisateur$empruntsArgs<ExtArgs>
    avis?: boolean | Utilisateur$avisArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    dateCreation?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    dateCreation?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectScalar = {
    id?: boolean
    nom?: boolean
    email?: boolean
    dateCreation?: boolean
  }

  export type UtilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "email" | "dateCreation", ExtArgs["result"]["utilisateur"]>
  export type UtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprunts?: boolean | Utilisateur$empruntsArgs<ExtArgs>
    avis?: boolean | Utilisateur$avisArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UtilisateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UtilisateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utilisateur"
    objects: {
      emprunts: Prisma.$EmpruntPayload<ExtArgs>[]
      avis: Prisma.$AvisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      email: string
      dateCreation: Date
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }

  type UtilisateurGetPayload<S extends boolean | null | undefined | UtilisateurDefaultArgs> = $Result.GetResult<Prisma.$UtilisateurPayload, S>

  type UtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface UtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateur'], meta: { name: 'Utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {UtilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilisateurFindUniqueArgs>(args: SelectSubset<T, UtilisateurFindUniqueArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilisateurFindFirstArgs>(args?: SelectSubset<T, UtilisateurFindFirstArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilisateurFindManyArgs>(args?: SelectSubset<T, UtilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateur.
     * @param {UtilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
     */
    create<T extends UtilisateurCreateArgs>(args: SelectSubset<T, UtilisateurCreateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {UtilisateurCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilisateurCreateManyArgs>(args?: SelectSubset<T, UtilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utilisateurs and returns the data saved in the database.
     * @param {UtilisateurCreateManyAndReturnArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UtilisateurCreateManyAndReturnArgs>(args?: SelectSubset<T, UtilisateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Utilisateur.
     * @param {UtilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
     */
    delete<T extends UtilisateurDeleteArgs>(args: SelectSubset<T, UtilisateurDeleteArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateur.
     * @param {UtilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilisateurUpdateArgs>(args: SelectSubset<T, UtilisateurUpdateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilisateurDeleteManyArgs>(args?: SelectSubset<T, UtilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilisateurUpdateManyArgs>(args: SelectSubset<T, UtilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs and returns the data updated in the database.
     * @param {UtilisateurUpdateManyAndReturnArgs} args - Arguments to update many Utilisateurs.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UtilisateurUpdateManyAndReturnArgs>(args: SelectSubset<T, UtilisateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Utilisateur.
     * @param {UtilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
     */
    upsert<T extends UtilisateurUpsertArgs>(args: SelectSubset<T, UtilisateurUpsertArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateurCountArgs>(
      args?: Subset<T, UtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateur model
   */
  readonly fields: UtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emprunts<T extends Utilisateur$empruntsArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$empruntsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avis<T extends Utilisateur$avisArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$avisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Utilisateur model
   */
  interface UtilisateurFieldRefs {
    readonly id: FieldRef<"Utilisateur", 'Int'>
    readonly nom: FieldRef<"Utilisateur", 'String'>
    readonly email: FieldRef<"Utilisateur", 'String'>
    readonly dateCreation: FieldRef<"Utilisateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Utilisateur findUnique
   */
  export type UtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findUniqueOrThrow
   */
  export type UtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findFirst
   */
  export type UtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findFirstOrThrow
   */
  export type UtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findMany
   */
  export type UtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur create
   */
  export type UtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateur.
     */
    data: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
  }

  /**
   * Utilisateur createMany
   */
  export type UtilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
  }

  /**
   * Utilisateur createManyAndReturn
   */
  export type UtilisateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
  }

  /**
   * Utilisateur update
   */
  export type UtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateur.
     */
    data: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
    /**
     * Choose, which Utilisateur to update.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur updateMany
   */
  export type UtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur updateManyAndReturn
   */
  export type UtilisateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur upsert
   */
  export type UtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateur to update in case it exists.
     */
    where: UtilisateurWhereUniqueInput
    /**
     * In case the Utilisateur found by the `where` argument doesn't exist, create a new Utilisateur with this data.
     */
    create: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
    /**
     * In case the Utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
  }

  /**
   * Utilisateur delete
   */
  export type UtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter which Utilisateur to delete.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur deleteMany
   */
  export type UtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * Utilisateur.emprunts
   */
  export type Utilisateur$empruntsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    where?: EmpruntWhereInput
    orderBy?: EmpruntOrderByWithRelationInput | EmpruntOrderByWithRelationInput[]
    cursor?: EmpruntWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmpruntScalarFieldEnum | EmpruntScalarFieldEnum[]
  }

  /**
   * Utilisateur.avis
   */
  export type Utilisateur$avisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    where?: AvisWhereInput
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    cursor?: AvisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvisScalarFieldEnum | AvisScalarFieldEnum[]
  }

  /**
   * Utilisateur without action
   */
  export type UtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
  }


  /**
   * Model Auteur
   */

  export type AggregateAuteur = {
    _count: AuteurCountAggregateOutputType | null
    _avg: AuteurAvgAggregateOutputType | null
    _sum: AuteurSumAggregateOutputType | null
    _min: AuteurMinAggregateOutputType | null
    _max: AuteurMaxAggregateOutputType | null
  }

  export type AuteurAvgAggregateOutputType = {
    id: number | null
  }

  export type AuteurSumAggregateOutputType = {
    id: number | null
  }

  export type AuteurMinAggregateOutputType = {
    id: number | null
    nom: string | null
    biographie: string | null
  }

  export type AuteurMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    biographie: string | null
  }

  export type AuteurCountAggregateOutputType = {
    id: number
    nom: number
    biographie: number
    _all: number
  }


  export type AuteurAvgAggregateInputType = {
    id?: true
  }

  export type AuteurSumAggregateInputType = {
    id?: true
  }

  export type AuteurMinAggregateInputType = {
    id?: true
    nom?: true
    biographie?: true
  }

  export type AuteurMaxAggregateInputType = {
    id?: true
    nom?: true
    biographie?: true
  }

  export type AuteurCountAggregateInputType = {
    id?: true
    nom?: true
    biographie?: true
    _all?: true
  }

  export type AuteurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auteur to aggregate.
     */
    where?: AuteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auteurs to fetch.
     */
    orderBy?: AuteurOrderByWithRelationInput | AuteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Auteurs
    **/
    _count?: true | AuteurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuteurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuteurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuteurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuteurMaxAggregateInputType
  }

  export type GetAuteurAggregateType<T extends AuteurAggregateArgs> = {
        [P in keyof T & keyof AggregateAuteur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuteur[P]>
      : GetScalarType<T[P], AggregateAuteur[P]>
  }




  export type AuteurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuteurWhereInput
    orderBy?: AuteurOrderByWithAggregationInput | AuteurOrderByWithAggregationInput[]
    by: AuteurScalarFieldEnum[] | AuteurScalarFieldEnum
    having?: AuteurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuteurCountAggregateInputType | true
    _avg?: AuteurAvgAggregateInputType
    _sum?: AuteurSumAggregateInputType
    _min?: AuteurMinAggregateInputType
    _max?: AuteurMaxAggregateInputType
  }

  export type AuteurGroupByOutputType = {
    id: number
    nom: string
    biographie: string | null
    _count: AuteurCountAggregateOutputType | null
    _avg: AuteurAvgAggregateOutputType | null
    _sum: AuteurSumAggregateOutputType | null
    _min: AuteurMinAggregateOutputType | null
    _max: AuteurMaxAggregateOutputType | null
  }

  type GetAuteurGroupByPayload<T extends AuteurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuteurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuteurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuteurGroupByOutputType[P]>
            : GetScalarType<T[P], AuteurGroupByOutputType[P]>
        }
      >
    >


  export type AuteurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    biographie?: boolean
    livres?: boolean | Auteur$livresArgs<ExtArgs>
    _count?: boolean | AuteurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auteur"]>

  export type AuteurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    biographie?: boolean
  }, ExtArgs["result"]["auteur"]>

  export type AuteurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    biographie?: boolean
  }, ExtArgs["result"]["auteur"]>

  export type AuteurSelectScalar = {
    id?: boolean
    nom?: boolean
    biographie?: boolean
  }

  export type AuteurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "biographie", ExtArgs["result"]["auteur"]>
  export type AuteurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livres?: boolean | Auteur$livresArgs<ExtArgs>
    _count?: boolean | AuteurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuteurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuteurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuteurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auteur"
    objects: {
      livres: Prisma.$LivrePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      biographie: string | null
    }, ExtArgs["result"]["auteur"]>
    composites: {}
  }

  type AuteurGetPayload<S extends boolean | null | undefined | AuteurDefaultArgs> = $Result.GetResult<Prisma.$AuteurPayload, S>

  type AuteurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuteurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuteurCountAggregateInputType | true
    }

  export interface AuteurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auteur'], meta: { name: 'Auteur' } }
    /**
     * Find zero or one Auteur that matches the filter.
     * @param {AuteurFindUniqueArgs} args - Arguments to find a Auteur
     * @example
     * // Get one Auteur
     * const auteur = await prisma.auteur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuteurFindUniqueArgs>(args: SelectSubset<T, AuteurFindUniqueArgs<ExtArgs>>): Prisma__AuteurClient<$Result.GetResult<Prisma.$AuteurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auteur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuteurFindUniqueOrThrowArgs} args - Arguments to find a Auteur
     * @example
     * // Get one Auteur
     * const auteur = await prisma.auteur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuteurFindUniqueOrThrowArgs>(args: SelectSubset<T, AuteurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuteurClient<$Result.GetResult<Prisma.$AuteurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auteur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuteurFindFirstArgs} args - Arguments to find a Auteur
     * @example
     * // Get one Auteur
     * const auteur = await prisma.auteur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuteurFindFirstArgs>(args?: SelectSubset<T, AuteurFindFirstArgs<ExtArgs>>): Prisma__AuteurClient<$Result.GetResult<Prisma.$AuteurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auteur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuteurFindFirstOrThrowArgs} args - Arguments to find a Auteur
     * @example
     * // Get one Auteur
     * const auteur = await prisma.auteur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuteurFindFirstOrThrowArgs>(args?: SelectSubset<T, AuteurFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuteurClient<$Result.GetResult<Prisma.$AuteurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auteurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuteurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auteurs
     * const auteurs = await prisma.auteur.findMany()
     * 
     * // Get first 10 Auteurs
     * const auteurs = await prisma.auteur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auteurWithIdOnly = await prisma.auteur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuteurFindManyArgs>(args?: SelectSubset<T, AuteurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuteurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auteur.
     * @param {AuteurCreateArgs} args - Arguments to create a Auteur.
     * @example
     * // Create one Auteur
     * const Auteur = await prisma.auteur.create({
     *   data: {
     *     // ... data to create a Auteur
     *   }
     * })
     * 
     */
    create<T extends AuteurCreateArgs>(args: SelectSubset<T, AuteurCreateArgs<ExtArgs>>): Prisma__AuteurClient<$Result.GetResult<Prisma.$AuteurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auteurs.
     * @param {AuteurCreateManyArgs} args - Arguments to create many Auteurs.
     * @example
     * // Create many Auteurs
     * const auteur = await prisma.auteur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuteurCreateManyArgs>(args?: SelectSubset<T, AuteurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auteurs and returns the data saved in the database.
     * @param {AuteurCreateManyAndReturnArgs} args - Arguments to create many Auteurs.
     * @example
     * // Create many Auteurs
     * const auteur = await prisma.auteur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auteurs and only return the `id`
     * const auteurWithIdOnly = await prisma.auteur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuteurCreateManyAndReturnArgs>(args?: SelectSubset<T, AuteurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuteurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auteur.
     * @param {AuteurDeleteArgs} args - Arguments to delete one Auteur.
     * @example
     * // Delete one Auteur
     * const Auteur = await prisma.auteur.delete({
     *   where: {
     *     // ... filter to delete one Auteur
     *   }
     * })
     * 
     */
    delete<T extends AuteurDeleteArgs>(args: SelectSubset<T, AuteurDeleteArgs<ExtArgs>>): Prisma__AuteurClient<$Result.GetResult<Prisma.$AuteurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auteur.
     * @param {AuteurUpdateArgs} args - Arguments to update one Auteur.
     * @example
     * // Update one Auteur
     * const auteur = await prisma.auteur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuteurUpdateArgs>(args: SelectSubset<T, AuteurUpdateArgs<ExtArgs>>): Prisma__AuteurClient<$Result.GetResult<Prisma.$AuteurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auteurs.
     * @param {AuteurDeleteManyArgs} args - Arguments to filter Auteurs to delete.
     * @example
     * // Delete a few Auteurs
     * const { count } = await prisma.auteur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuteurDeleteManyArgs>(args?: SelectSubset<T, AuteurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auteurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuteurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auteurs
     * const auteur = await prisma.auteur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuteurUpdateManyArgs>(args: SelectSubset<T, AuteurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auteurs and returns the data updated in the database.
     * @param {AuteurUpdateManyAndReturnArgs} args - Arguments to update many Auteurs.
     * @example
     * // Update many Auteurs
     * const auteur = await prisma.auteur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auteurs and only return the `id`
     * const auteurWithIdOnly = await prisma.auteur.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuteurUpdateManyAndReturnArgs>(args: SelectSubset<T, AuteurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuteurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auteur.
     * @param {AuteurUpsertArgs} args - Arguments to update or create a Auteur.
     * @example
     * // Update or create a Auteur
     * const auteur = await prisma.auteur.upsert({
     *   create: {
     *     // ... data to create a Auteur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auteur we want to update
     *   }
     * })
     */
    upsert<T extends AuteurUpsertArgs>(args: SelectSubset<T, AuteurUpsertArgs<ExtArgs>>): Prisma__AuteurClient<$Result.GetResult<Prisma.$AuteurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auteurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuteurCountArgs} args - Arguments to filter Auteurs to count.
     * @example
     * // Count the number of Auteurs
     * const count = await prisma.auteur.count({
     *   where: {
     *     // ... the filter for the Auteurs we want to count
     *   }
     * })
    **/
    count<T extends AuteurCountArgs>(
      args?: Subset<T, AuteurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuteurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auteur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuteurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuteurAggregateArgs>(args: Subset<T, AuteurAggregateArgs>): Prisma.PrismaPromise<GetAuteurAggregateType<T>>

    /**
     * Group by Auteur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuteurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuteurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuteurGroupByArgs['orderBy'] }
        : { orderBy?: AuteurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuteurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuteurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auteur model
   */
  readonly fields: AuteurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auteur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuteurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livres<T extends Auteur$livresArgs<ExtArgs> = {}>(args?: Subset<T, Auteur$livresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Auteur model
   */
  interface AuteurFieldRefs {
    readonly id: FieldRef<"Auteur", 'Int'>
    readonly nom: FieldRef<"Auteur", 'String'>
    readonly biographie: FieldRef<"Auteur", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Auteur findUnique
   */
  export type AuteurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auteur
     */
    select?: AuteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auteur
     */
    omit?: AuteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuteurInclude<ExtArgs> | null
    /**
     * Filter, which Auteur to fetch.
     */
    where: AuteurWhereUniqueInput
  }

  /**
   * Auteur findUniqueOrThrow
   */
  export type AuteurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auteur
     */
    select?: AuteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auteur
     */
    omit?: AuteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuteurInclude<ExtArgs> | null
    /**
     * Filter, which Auteur to fetch.
     */
    where: AuteurWhereUniqueInput
  }

  /**
   * Auteur findFirst
   */
  export type AuteurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auteur
     */
    select?: AuteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auteur
     */
    omit?: AuteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuteurInclude<ExtArgs> | null
    /**
     * Filter, which Auteur to fetch.
     */
    where?: AuteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auteurs to fetch.
     */
    orderBy?: AuteurOrderByWithRelationInput | AuteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auteurs.
     */
    cursor?: AuteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auteurs.
     */
    distinct?: AuteurScalarFieldEnum | AuteurScalarFieldEnum[]
  }

  /**
   * Auteur findFirstOrThrow
   */
  export type AuteurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auteur
     */
    select?: AuteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auteur
     */
    omit?: AuteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuteurInclude<ExtArgs> | null
    /**
     * Filter, which Auteur to fetch.
     */
    where?: AuteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auteurs to fetch.
     */
    orderBy?: AuteurOrderByWithRelationInput | AuteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auteurs.
     */
    cursor?: AuteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auteurs.
     */
    distinct?: AuteurScalarFieldEnum | AuteurScalarFieldEnum[]
  }

  /**
   * Auteur findMany
   */
  export type AuteurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auteur
     */
    select?: AuteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auteur
     */
    omit?: AuteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuteurInclude<ExtArgs> | null
    /**
     * Filter, which Auteurs to fetch.
     */
    where?: AuteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auteurs to fetch.
     */
    orderBy?: AuteurOrderByWithRelationInput | AuteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Auteurs.
     */
    cursor?: AuteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auteurs.
     */
    skip?: number
    distinct?: AuteurScalarFieldEnum | AuteurScalarFieldEnum[]
  }

  /**
   * Auteur create
   */
  export type AuteurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auteur
     */
    select?: AuteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auteur
     */
    omit?: AuteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuteurInclude<ExtArgs> | null
    /**
     * The data needed to create a Auteur.
     */
    data: XOR<AuteurCreateInput, AuteurUncheckedCreateInput>
  }

  /**
   * Auteur createMany
   */
  export type AuteurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auteurs.
     */
    data: AuteurCreateManyInput | AuteurCreateManyInput[]
  }

  /**
   * Auteur createManyAndReturn
   */
  export type AuteurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auteur
     */
    select?: AuteurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auteur
     */
    omit?: AuteurOmit<ExtArgs> | null
    /**
     * The data used to create many Auteurs.
     */
    data: AuteurCreateManyInput | AuteurCreateManyInput[]
  }

  /**
   * Auteur update
   */
  export type AuteurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auteur
     */
    select?: AuteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auteur
     */
    omit?: AuteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuteurInclude<ExtArgs> | null
    /**
     * The data needed to update a Auteur.
     */
    data: XOR<AuteurUpdateInput, AuteurUncheckedUpdateInput>
    /**
     * Choose, which Auteur to update.
     */
    where: AuteurWhereUniqueInput
  }

  /**
   * Auteur updateMany
   */
  export type AuteurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Auteurs.
     */
    data: XOR<AuteurUpdateManyMutationInput, AuteurUncheckedUpdateManyInput>
    /**
     * Filter which Auteurs to update
     */
    where?: AuteurWhereInput
    /**
     * Limit how many Auteurs to update.
     */
    limit?: number
  }

  /**
   * Auteur updateManyAndReturn
   */
  export type AuteurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auteur
     */
    select?: AuteurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auteur
     */
    omit?: AuteurOmit<ExtArgs> | null
    /**
     * The data used to update Auteurs.
     */
    data: XOR<AuteurUpdateManyMutationInput, AuteurUncheckedUpdateManyInput>
    /**
     * Filter which Auteurs to update
     */
    where?: AuteurWhereInput
    /**
     * Limit how many Auteurs to update.
     */
    limit?: number
  }

  /**
   * Auteur upsert
   */
  export type AuteurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auteur
     */
    select?: AuteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auteur
     */
    omit?: AuteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuteurInclude<ExtArgs> | null
    /**
     * The filter to search for the Auteur to update in case it exists.
     */
    where: AuteurWhereUniqueInput
    /**
     * In case the Auteur found by the `where` argument doesn't exist, create a new Auteur with this data.
     */
    create: XOR<AuteurCreateInput, AuteurUncheckedCreateInput>
    /**
     * In case the Auteur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuteurUpdateInput, AuteurUncheckedUpdateInput>
  }

  /**
   * Auteur delete
   */
  export type AuteurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auteur
     */
    select?: AuteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auteur
     */
    omit?: AuteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuteurInclude<ExtArgs> | null
    /**
     * Filter which Auteur to delete.
     */
    where: AuteurWhereUniqueInput
  }

  /**
   * Auteur deleteMany
   */
  export type AuteurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auteurs to delete
     */
    where?: AuteurWhereInput
    /**
     * Limit how many Auteurs to delete.
     */
    limit?: number
  }

  /**
   * Auteur.livres
   */
  export type Auteur$livresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livre
     */
    select?: LivreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livre
     */
    omit?: LivreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreInclude<ExtArgs> | null
    where?: LivreWhereInput
    orderBy?: LivreOrderByWithRelationInput | LivreOrderByWithRelationInput[]
    cursor?: LivreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LivreScalarFieldEnum | LivreScalarFieldEnum[]
  }

  /**
   * Auteur without action
   */
  export type AuteurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auteur
     */
    select?: AuteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auteur
     */
    omit?: AuteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuteurInclude<ExtArgs> | null
  }


  /**
   * Model Livre
   */

  export type AggregateLivre = {
    _count: LivreCountAggregateOutputType | null
    _avg: LivreAvgAggregateOutputType | null
    _sum: LivreSumAggregateOutputType | null
    _min: LivreMinAggregateOutputType | null
    _max: LivreMaxAggregateOutputType | null
  }

  export type LivreAvgAggregateOutputType = {
    id: number | null
    auteurId: number | null
  }

  export type LivreSumAggregateOutputType = {
    id: number | null
    auteurId: number | null
  }

  export type LivreMinAggregateOutputType = {
    id: number | null
    titre: string | null
    description: string | null
    disponible: boolean | null
    dateCreation: Date | null
    auteurId: number | null
  }

  export type LivreMaxAggregateOutputType = {
    id: number | null
    titre: string | null
    description: string | null
    disponible: boolean | null
    dateCreation: Date | null
    auteurId: number | null
  }

  export type LivreCountAggregateOutputType = {
    id: number
    titre: number
    description: number
    disponible: number
    dateCreation: number
    auteurId: number
    _all: number
  }


  export type LivreAvgAggregateInputType = {
    id?: true
    auteurId?: true
  }

  export type LivreSumAggregateInputType = {
    id?: true
    auteurId?: true
  }

  export type LivreMinAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    disponible?: true
    dateCreation?: true
    auteurId?: true
  }

  export type LivreMaxAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    disponible?: true
    dateCreation?: true
    auteurId?: true
  }

  export type LivreCountAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    disponible?: true
    dateCreation?: true
    auteurId?: true
    _all?: true
  }

  export type LivreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livre to aggregate.
     */
    where?: LivreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livres to fetch.
     */
    orderBy?: LivreOrderByWithRelationInput | LivreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LivreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Livres
    **/
    _count?: true | LivreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LivreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LivreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LivreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LivreMaxAggregateInputType
  }

  export type GetLivreAggregateType<T extends LivreAggregateArgs> = {
        [P in keyof T & keyof AggregateLivre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLivre[P]>
      : GetScalarType<T[P], AggregateLivre[P]>
  }




  export type LivreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivreWhereInput
    orderBy?: LivreOrderByWithAggregationInput | LivreOrderByWithAggregationInput[]
    by: LivreScalarFieldEnum[] | LivreScalarFieldEnum
    having?: LivreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LivreCountAggregateInputType | true
    _avg?: LivreAvgAggregateInputType
    _sum?: LivreSumAggregateInputType
    _min?: LivreMinAggregateInputType
    _max?: LivreMaxAggregateInputType
  }

  export type LivreGroupByOutputType = {
    id: number
    titre: string
    description: string | null
    disponible: boolean
    dateCreation: Date
    auteurId: number
    _count: LivreCountAggregateOutputType | null
    _avg: LivreAvgAggregateOutputType | null
    _sum: LivreSumAggregateOutputType | null
    _min: LivreMinAggregateOutputType | null
    _max: LivreMaxAggregateOutputType | null
  }

  type GetLivreGroupByPayload<T extends LivreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LivreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LivreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LivreGroupByOutputType[P]>
            : GetScalarType<T[P], LivreGroupByOutputType[P]>
        }
      >
    >


  export type LivreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    disponible?: boolean
    dateCreation?: boolean
    auteurId?: boolean
    auteur?: boolean | AuteurDefaultArgs<ExtArgs>
    categories?: boolean | Livre$categoriesArgs<ExtArgs>
    emprunts?: boolean | Livre$empruntsArgs<ExtArgs>
    avis?: boolean | Livre$avisArgs<ExtArgs>
    _count?: boolean | LivreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livre"]>

  export type LivreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    disponible?: boolean
    dateCreation?: boolean
    auteurId?: boolean
    auteur?: boolean | AuteurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livre"]>

  export type LivreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    disponible?: boolean
    dateCreation?: boolean
    auteurId?: boolean
    auteur?: boolean | AuteurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livre"]>

  export type LivreSelectScalar = {
    id?: boolean
    titre?: boolean
    description?: boolean
    disponible?: boolean
    dateCreation?: boolean
    auteurId?: boolean
  }

  export type LivreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "description" | "disponible" | "dateCreation" | "auteurId", ExtArgs["result"]["livre"]>
  export type LivreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | AuteurDefaultArgs<ExtArgs>
    categories?: boolean | Livre$categoriesArgs<ExtArgs>
    emprunts?: boolean | Livre$empruntsArgs<ExtArgs>
    avis?: boolean | Livre$avisArgs<ExtArgs>
    _count?: boolean | LivreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LivreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | AuteurDefaultArgs<ExtArgs>
  }
  export type LivreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | AuteurDefaultArgs<ExtArgs>
  }

  export type $LivrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Livre"
    objects: {
      auteur: Prisma.$AuteurPayload<ExtArgs>
      categories: Prisma.$LivreCategoriePayload<ExtArgs>[]
      emprunts: Prisma.$EmpruntPayload<ExtArgs>[]
      avis: Prisma.$AvisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titre: string
      description: string | null
      disponible: boolean
      dateCreation: Date
      auteurId: number
    }, ExtArgs["result"]["livre"]>
    composites: {}
  }

  type LivreGetPayload<S extends boolean | null | undefined | LivreDefaultArgs> = $Result.GetResult<Prisma.$LivrePayload, S>

  type LivreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LivreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LivreCountAggregateInputType | true
    }

  export interface LivreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Livre'], meta: { name: 'Livre' } }
    /**
     * Find zero or one Livre that matches the filter.
     * @param {LivreFindUniqueArgs} args - Arguments to find a Livre
     * @example
     * // Get one Livre
     * const livre = await prisma.livre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LivreFindUniqueArgs>(args: SelectSubset<T, LivreFindUniqueArgs<ExtArgs>>): Prisma__LivreClient<$Result.GetResult<Prisma.$LivrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Livre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LivreFindUniqueOrThrowArgs} args - Arguments to find a Livre
     * @example
     * // Get one Livre
     * const livre = await prisma.livre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LivreFindUniqueOrThrowArgs>(args: SelectSubset<T, LivreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LivreClient<$Result.GetResult<Prisma.$LivrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreFindFirstArgs} args - Arguments to find a Livre
     * @example
     * // Get one Livre
     * const livre = await prisma.livre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LivreFindFirstArgs>(args?: SelectSubset<T, LivreFindFirstArgs<ExtArgs>>): Prisma__LivreClient<$Result.GetResult<Prisma.$LivrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreFindFirstOrThrowArgs} args - Arguments to find a Livre
     * @example
     * // Get one Livre
     * const livre = await prisma.livre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LivreFindFirstOrThrowArgs>(args?: SelectSubset<T, LivreFindFirstOrThrowArgs<ExtArgs>>): Prisma__LivreClient<$Result.GetResult<Prisma.$LivrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Livres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Livres
     * const livres = await prisma.livre.findMany()
     * 
     * // Get first 10 Livres
     * const livres = await prisma.livre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const livreWithIdOnly = await prisma.livre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LivreFindManyArgs>(args?: SelectSubset<T, LivreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Livre.
     * @param {LivreCreateArgs} args - Arguments to create a Livre.
     * @example
     * // Create one Livre
     * const Livre = await prisma.livre.create({
     *   data: {
     *     // ... data to create a Livre
     *   }
     * })
     * 
     */
    create<T extends LivreCreateArgs>(args: SelectSubset<T, LivreCreateArgs<ExtArgs>>): Prisma__LivreClient<$Result.GetResult<Prisma.$LivrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Livres.
     * @param {LivreCreateManyArgs} args - Arguments to create many Livres.
     * @example
     * // Create many Livres
     * const livre = await prisma.livre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LivreCreateManyArgs>(args?: SelectSubset<T, LivreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Livres and returns the data saved in the database.
     * @param {LivreCreateManyAndReturnArgs} args - Arguments to create many Livres.
     * @example
     * // Create many Livres
     * const livre = await prisma.livre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Livres and only return the `id`
     * const livreWithIdOnly = await prisma.livre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LivreCreateManyAndReturnArgs>(args?: SelectSubset<T, LivreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Livre.
     * @param {LivreDeleteArgs} args - Arguments to delete one Livre.
     * @example
     * // Delete one Livre
     * const Livre = await prisma.livre.delete({
     *   where: {
     *     // ... filter to delete one Livre
     *   }
     * })
     * 
     */
    delete<T extends LivreDeleteArgs>(args: SelectSubset<T, LivreDeleteArgs<ExtArgs>>): Prisma__LivreClient<$Result.GetResult<Prisma.$LivrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Livre.
     * @param {LivreUpdateArgs} args - Arguments to update one Livre.
     * @example
     * // Update one Livre
     * const livre = await prisma.livre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LivreUpdateArgs>(args: SelectSubset<T, LivreUpdateArgs<ExtArgs>>): Prisma__LivreClient<$Result.GetResult<Prisma.$LivrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Livres.
     * @param {LivreDeleteManyArgs} args - Arguments to filter Livres to delete.
     * @example
     * // Delete a few Livres
     * const { count } = await prisma.livre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LivreDeleteManyArgs>(args?: SelectSubset<T, LivreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Livres
     * const livre = await prisma.livre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LivreUpdateManyArgs>(args: SelectSubset<T, LivreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livres and returns the data updated in the database.
     * @param {LivreUpdateManyAndReturnArgs} args - Arguments to update many Livres.
     * @example
     * // Update many Livres
     * const livre = await prisma.livre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Livres and only return the `id`
     * const livreWithIdOnly = await prisma.livre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LivreUpdateManyAndReturnArgs>(args: SelectSubset<T, LivreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Livre.
     * @param {LivreUpsertArgs} args - Arguments to update or create a Livre.
     * @example
     * // Update or create a Livre
     * const livre = await prisma.livre.upsert({
     *   create: {
     *     // ... data to create a Livre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Livre we want to update
     *   }
     * })
     */
    upsert<T extends LivreUpsertArgs>(args: SelectSubset<T, LivreUpsertArgs<ExtArgs>>): Prisma__LivreClient<$Result.GetResult<Prisma.$LivrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Livres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreCountArgs} args - Arguments to filter Livres to count.
     * @example
     * // Count the number of Livres
     * const count = await prisma.livre.count({
     *   where: {
     *     // ... the filter for the Livres we want to count
     *   }
     * })
    **/
    count<T extends LivreCountArgs>(
      args?: Subset<T, LivreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LivreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Livre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LivreAggregateArgs>(args: Subset<T, LivreAggregateArgs>): Prisma.PrismaPromise<GetLivreAggregateType<T>>

    /**
     * Group by Livre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LivreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LivreGroupByArgs['orderBy'] }
        : { orderBy?: LivreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LivreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Livre model
   */
  readonly fields: LivreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Livre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LivreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auteur<T extends AuteurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuteurDefaultArgs<ExtArgs>>): Prisma__AuteurClient<$Result.GetResult<Prisma.$AuteurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends Livre$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Livre$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivreCategoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emprunts<T extends Livre$empruntsArgs<ExtArgs> = {}>(args?: Subset<T, Livre$empruntsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avis<T extends Livre$avisArgs<ExtArgs> = {}>(args?: Subset<T, Livre$avisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Livre model
   */
  interface LivreFieldRefs {
    readonly id: FieldRef<"Livre", 'Int'>
    readonly titre: FieldRef<"Livre", 'String'>
    readonly description: FieldRef<"Livre", 'String'>
    readonly disponible: FieldRef<"Livre", 'Boolean'>
    readonly dateCreation: FieldRef<"Livre", 'DateTime'>
    readonly auteurId: FieldRef<"Livre", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Livre findUnique
   */
  export type LivreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livre
     */
    select?: LivreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livre
     */
    omit?: LivreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreInclude<ExtArgs> | null
    /**
     * Filter, which Livre to fetch.
     */
    where: LivreWhereUniqueInput
  }

  /**
   * Livre findUniqueOrThrow
   */
  export type LivreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livre
     */
    select?: LivreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livre
     */
    omit?: LivreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreInclude<ExtArgs> | null
    /**
     * Filter, which Livre to fetch.
     */
    where: LivreWhereUniqueInput
  }

  /**
   * Livre findFirst
   */
  export type LivreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livre
     */
    select?: LivreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livre
     */
    omit?: LivreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreInclude<ExtArgs> | null
    /**
     * Filter, which Livre to fetch.
     */
    where?: LivreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livres to fetch.
     */
    orderBy?: LivreOrderByWithRelationInput | LivreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livres.
     */
    cursor?: LivreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livres.
     */
    distinct?: LivreScalarFieldEnum | LivreScalarFieldEnum[]
  }

  /**
   * Livre findFirstOrThrow
   */
  export type LivreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livre
     */
    select?: LivreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livre
     */
    omit?: LivreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreInclude<ExtArgs> | null
    /**
     * Filter, which Livre to fetch.
     */
    where?: LivreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livres to fetch.
     */
    orderBy?: LivreOrderByWithRelationInput | LivreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livres.
     */
    cursor?: LivreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livres.
     */
    distinct?: LivreScalarFieldEnum | LivreScalarFieldEnum[]
  }

  /**
   * Livre findMany
   */
  export type LivreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livre
     */
    select?: LivreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livre
     */
    omit?: LivreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreInclude<ExtArgs> | null
    /**
     * Filter, which Livres to fetch.
     */
    where?: LivreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livres to fetch.
     */
    orderBy?: LivreOrderByWithRelationInput | LivreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Livres.
     */
    cursor?: LivreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livres.
     */
    skip?: number
    distinct?: LivreScalarFieldEnum | LivreScalarFieldEnum[]
  }

  /**
   * Livre create
   */
  export type LivreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livre
     */
    select?: LivreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livre
     */
    omit?: LivreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreInclude<ExtArgs> | null
    /**
     * The data needed to create a Livre.
     */
    data: XOR<LivreCreateInput, LivreUncheckedCreateInput>
  }

  /**
   * Livre createMany
   */
  export type LivreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Livres.
     */
    data: LivreCreateManyInput | LivreCreateManyInput[]
  }

  /**
   * Livre createManyAndReturn
   */
  export type LivreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livre
     */
    select?: LivreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livre
     */
    omit?: LivreOmit<ExtArgs> | null
    /**
     * The data used to create many Livres.
     */
    data: LivreCreateManyInput | LivreCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Livre update
   */
  export type LivreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livre
     */
    select?: LivreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livre
     */
    omit?: LivreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreInclude<ExtArgs> | null
    /**
     * The data needed to update a Livre.
     */
    data: XOR<LivreUpdateInput, LivreUncheckedUpdateInput>
    /**
     * Choose, which Livre to update.
     */
    where: LivreWhereUniqueInput
  }

  /**
   * Livre updateMany
   */
  export type LivreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Livres.
     */
    data: XOR<LivreUpdateManyMutationInput, LivreUncheckedUpdateManyInput>
    /**
     * Filter which Livres to update
     */
    where?: LivreWhereInput
    /**
     * Limit how many Livres to update.
     */
    limit?: number
  }

  /**
   * Livre updateManyAndReturn
   */
  export type LivreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livre
     */
    select?: LivreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livre
     */
    omit?: LivreOmit<ExtArgs> | null
    /**
     * The data used to update Livres.
     */
    data: XOR<LivreUpdateManyMutationInput, LivreUncheckedUpdateManyInput>
    /**
     * Filter which Livres to update
     */
    where?: LivreWhereInput
    /**
     * Limit how many Livres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Livre upsert
   */
  export type LivreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livre
     */
    select?: LivreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livre
     */
    omit?: LivreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreInclude<ExtArgs> | null
    /**
     * The filter to search for the Livre to update in case it exists.
     */
    where: LivreWhereUniqueInput
    /**
     * In case the Livre found by the `where` argument doesn't exist, create a new Livre with this data.
     */
    create: XOR<LivreCreateInput, LivreUncheckedCreateInput>
    /**
     * In case the Livre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LivreUpdateInput, LivreUncheckedUpdateInput>
  }

  /**
   * Livre delete
   */
  export type LivreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livre
     */
    select?: LivreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livre
     */
    omit?: LivreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreInclude<ExtArgs> | null
    /**
     * Filter which Livre to delete.
     */
    where: LivreWhereUniqueInput
  }

  /**
   * Livre deleteMany
   */
  export type LivreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livres to delete
     */
    where?: LivreWhereInput
    /**
     * Limit how many Livres to delete.
     */
    limit?: number
  }

  /**
   * Livre.categories
   */
  export type Livre$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivreCategorie
     */
    select?: LivreCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivreCategorie
     */
    omit?: LivreCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreCategorieInclude<ExtArgs> | null
    where?: LivreCategorieWhereInput
    orderBy?: LivreCategorieOrderByWithRelationInput | LivreCategorieOrderByWithRelationInput[]
    cursor?: LivreCategorieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LivreCategorieScalarFieldEnum | LivreCategorieScalarFieldEnum[]
  }

  /**
   * Livre.emprunts
   */
  export type Livre$empruntsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    where?: EmpruntWhereInput
    orderBy?: EmpruntOrderByWithRelationInput | EmpruntOrderByWithRelationInput[]
    cursor?: EmpruntWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmpruntScalarFieldEnum | EmpruntScalarFieldEnum[]
  }

  /**
   * Livre.avis
   */
  export type Livre$avisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    where?: AvisWhereInput
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    cursor?: AvisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvisScalarFieldEnum | AvisScalarFieldEnum[]
  }

  /**
   * Livre without action
   */
  export type LivreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livre
     */
    select?: LivreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livre
     */
    omit?: LivreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreInclude<ExtArgs> | null
  }


  /**
   * Model Categorie
   */

  export type AggregateCategorie = {
    _count: CategorieCountAggregateOutputType | null
    _avg: CategorieAvgAggregateOutputType | null
    _sum: CategorieSumAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  export type CategorieAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorieSumAggregateOutputType = {
    id: number | null
  }

  export type CategorieMinAggregateOutputType = {
    id: number | null
    nom: string | null
  }

  export type CategorieMaxAggregateOutputType = {
    id: number | null
    nom: string | null
  }

  export type CategorieCountAggregateOutputType = {
    id: number
    nom: number
    _all: number
  }


  export type CategorieAvgAggregateInputType = {
    id?: true
  }

  export type CategorieSumAggregateInputType = {
    id?: true
  }

  export type CategorieMinAggregateInputType = {
    id?: true
    nom?: true
  }

  export type CategorieMaxAggregateInputType = {
    id?: true
    nom?: true
  }

  export type CategorieCountAggregateInputType = {
    id?: true
    nom?: true
    _all?: true
  }

  export type CategorieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorie to aggregate.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategorieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategorieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategorieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategorieMaxAggregateInputType
  }

  export type GetCategorieAggregateType<T extends CategorieAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorie[P]>
      : GetScalarType<T[P], AggregateCategorie[P]>
  }




  export type CategorieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategorieWhereInput
    orderBy?: CategorieOrderByWithAggregationInput | CategorieOrderByWithAggregationInput[]
    by: CategorieScalarFieldEnum[] | CategorieScalarFieldEnum
    having?: CategorieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategorieCountAggregateInputType | true
    _avg?: CategorieAvgAggregateInputType
    _sum?: CategorieSumAggregateInputType
    _min?: CategorieMinAggregateInputType
    _max?: CategorieMaxAggregateInputType
  }

  export type CategorieGroupByOutputType = {
    id: number
    nom: string
    _count: CategorieCountAggregateOutputType | null
    _avg: CategorieAvgAggregateOutputType | null
    _sum: CategorieSumAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  type GetCategorieGroupByPayload<T extends CategorieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategorieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategorieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategorieGroupByOutputType[P]>
            : GetScalarType<T[P], CategorieGroupByOutputType[P]>
        }
      >
    >


  export type CategorieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    livres?: boolean | Categorie$livresArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectScalar = {
    id?: boolean
    nom?: boolean
  }

  export type CategorieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom", ExtArgs["result"]["categorie"]>
  export type CategorieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livres?: boolean | Categorie$livresArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategorieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategorieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categorie"
    objects: {
      livres: Prisma.$LivreCategoriePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
    }, ExtArgs["result"]["categorie"]>
    composites: {}
  }

  type CategorieGetPayload<S extends boolean | null | undefined | CategorieDefaultArgs> = $Result.GetResult<Prisma.$CategoriePayload, S>

  type CategorieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategorieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategorieCountAggregateInputType | true
    }

  export interface CategorieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categorie'], meta: { name: 'Categorie' } }
    /**
     * Find zero or one Categorie that matches the filter.
     * @param {CategorieFindUniqueArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategorieFindUniqueArgs>(args: SelectSubset<T, CategorieFindUniqueArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategorieFindUniqueOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategorieFindUniqueOrThrowArgs>(args: SelectSubset<T, CategorieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindFirstArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategorieFindFirstArgs>(args?: SelectSubset<T, CategorieFindFirstArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindFirstOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategorieFindFirstOrThrowArgs>(args?: SelectSubset<T, CategorieFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categorie.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categorie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categorieWithIdOnly = await prisma.categorie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategorieFindManyArgs>(args?: SelectSubset<T, CategorieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorie.
     * @param {CategorieCreateArgs} args - Arguments to create a Categorie.
     * @example
     * // Create one Categorie
     * const Categorie = await prisma.categorie.create({
     *   data: {
     *     // ... data to create a Categorie
     *   }
     * })
     * 
     */
    create<T extends CategorieCreateArgs>(args: SelectSubset<T, CategorieCreateArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategorieCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategorieCreateManyArgs>(args?: SelectSubset<T, CategorieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategorieCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categorieWithIdOnly = await prisma.categorie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategorieCreateManyAndReturnArgs>(args?: SelectSubset<T, CategorieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categorie.
     * @param {CategorieDeleteArgs} args - Arguments to delete one Categorie.
     * @example
     * // Delete one Categorie
     * const Categorie = await prisma.categorie.delete({
     *   where: {
     *     // ... filter to delete one Categorie
     *   }
     * })
     * 
     */
    delete<T extends CategorieDeleteArgs>(args: SelectSubset<T, CategorieDeleteArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorie.
     * @param {CategorieUpdateArgs} args - Arguments to update one Categorie.
     * @example
     * // Update one Categorie
     * const categorie = await prisma.categorie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategorieUpdateArgs>(args: SelectSubset<T, CategorieUpdateArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategorieDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categorie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategorieDeleteManyArgs>(args?: SelectSubset<T, CategorieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategorieUpdateManyArgs>(args: SelectSubset<T, CategorieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategorieUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categorieWithIdOnly = await prisma.categorie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategorieUpdateManyAndReturnArgs>(args: SelectSubset<T, CategorieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categorie.
     * @param {CategorieUpsertArgs} args - Arguments to update or create a Categorie.
     * @example
     * // Update or create a Categorie
     * const categorie = await prisma.categorie.upsert({
     *   create: {
     *     // ... data to create a Categorie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorie we want to update
     *   }
     * })
     */
    upsert<T extends CategorieUpsertArgs>(args: SelectSubset<T, CategorieUpsertArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categorie.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategorieCountArgs>(
      args?: Subset<T, CategorieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategorieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategorieAggregateArgs>(args: Subset<T, CategorieAggregateArgs>): Prisma.PrismaPromise<GetCategorieAggregateType<T>>

    /**
     * Group by Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategorieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategorieGroupByArgs['orderBy'] }
        : { orderBy?: CategorieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategorieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categorie model
   */
  readonly fields: CategorieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categorie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategorieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livres<T extends Categorie$livresArgs<ExtArgs> = {}>(args?: Subset<T, Categorie$livresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivreCategoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categorie model
   */
  interface CategorieFieldRefs {
    readonly id: FieldRef<"Categorie", 'Int'>
    readonly nom: FieldRef<"Categorie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categorie findUnique
   */
  export type CategorieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie findUniqueOrThrow
   */
  export type CategorieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie findFirst
   */
  export type CategorieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie findFirstOrThrow
   */
  export type CategorieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie findMany
   */
  export type CategorieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie create
   */
  export type CategorieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The data needed to create a Categorie.
     */
    data: XOR<CategorieCreateInput, CategorieUncheckedCreateInput>
  }

  /**
   * Categorie createMany
   */
  export type CategorieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategorieCreateManyInput | CategorieCreateManyInput[]
  }

  /**
   * Categorie createManyAndReturn
   */
  export type CategorieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategorieCreateManyInput | CategorieCreateManyInput[]
  }

  /**
   * Categorie update
   */
  export type CategorieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The data needed to update a Categorie.
     */
    data: XOR<CategorieUpdateInput, CategorieUncheckedUpdateInput>
    /**
     * Choose, which Categorie to update.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie updateMany
   */
  export type CategorieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategorieUpdateManyMutationInput, CategorieUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categorie updateManyAndReturn
   */
  export type CategorieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategorieUpdateManyMutationInput, CategorieUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categorie upsert
   */
  export type CategorieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The filter to search for the Categorie to update in case it exists.
     */
    where: CategorieWhereUniqueInput
    /**
     * In case the Categorie found by the `where` argument doesn't exist, create a new Categorie with this data.
     */
    create: XOR<CategorieCreateInput, CategorieUncheckedCreateInput>
    /**
     * In case the Categorie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategorieUpdateInput, CategorieUncheckedUpdateInput>
  }

  /**
   * Categorie delete
   */
  export type CategorieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter which Categorie to delete.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie deleteMany
   */
  export type CategorieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categorie.livres
   */
  export type Categorie$livresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivreCategorie
     */
    select?: LivreCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivreCategorie
     */
    omit?: LivreCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreCategorieInclude<ExtArgs> | null
    where?: LivreCategorieWhereInput
    orderBy?: LivreCategorieOrderByWithRelationInput | LivreCategorieOrderByWithRelationInput[]
    cursor?: LivreCategorieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LivreCategorieScalarFieldEnum | LivreCategorieScalarFieldEnum[]
  }

  /**
   * Categorie without action
   */
  export type CategorieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
  }


  /**
   * Model LivreCategorie
   */

  export type AggregateLivreCategorie = {
    _count: LivreCategorieCountAggregateOutputType | null
    _avg: LivreCategorieAvgAggregateOutputType | null
    _sum: LivreCategorieSumAggregateOutputType | null
    _min: LivreCategorieMinAggregateOutputType | null
    _max: LivreCategorieMaxAggregateOutputType | null
  }

  export type LivreCategorieAvgAggregateOutputType = {
    livreId: number | null
    categorieId: number | null
  }

  export type LivreCategorieSumAggregateOutputType = {
    livreId: number | null
    categorieId: number | null
  }

  export type LivreCategorieMinAggregateOutputType = {
    livreId: number | null
    categorieId: number | null
  }

  export type LivreCategorieMaxAggregateOutputType = {
    livreId: number | null
    categorieId: number | null
  }

  export type LivreCategorieCountAggregateOutputType = {
    livreId: number
    categorieId: number
    _all: number
  }


  export type LivreCategorieAvgAggregateInputType = {
    livreId?: true
    categorieId?: true
  }

  export type LivreCategorieSumAggregateInputType = {
    livreId?: true
    categorieId?: true
  }

  export type LivreCategorieMinAggregateInputType = {
    livreId?: true
    categorieId?: true
  }

  export type LivreCategorieMaxAggregateInputType = {
    livreId?: true
    categorieId?: true
  }

  export type LivreCategorieCountAggregateInputType = {
    livreId?: true
    categorieId?: true
    _all?: true
  }

  export type LivreCategorieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LivreCategorie to aggregate.
     */
    where?: LivreCategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LivreCategories to fetch.
     */
    orderBy?: LivreCategorieOrderByWithRelationInput | LivreCategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LivreCategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LivreCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LivreCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LivreCategories
    **/
    _count?: true | LivreCategorieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LivreCategorieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LivreCategorieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LivreCategorieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LivreCategorieMaxAggregateInputType
  }

  export type GetLivreCategorieAggregateType<T extends LivreCategorieAggregateArgs> = {
        [P in keyof T & keyof AggregateLivreCategorie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLivreCategorie[P]>
      : GetScalarType<T[P], AggregateLivreCategorie[P]>
  }




  export type LivreCategorieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivreCategorieWhereInput
    orderBy?: LivreCategorieOrderByWithAggregationInput | LivreCategorieOrderByWithAggregationInput[]
    by: LivreCategorieScalarFieldEnum[] | LivreCategorieScalarFieldEnum
    having?: LivreCategorieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LivreCategorieCountAggregateInputType | true
    _avg?: LivreCategorieAvgAggregateInputType
    _sum?: LivreCategorieSumAggregateInputType
    _min?: LivreCategorieMinAggregateInputType
    _max?: LivreCategorieMaxAggregateInputType
  }

  export type LivreCategorieGroupByOutputType = {
    livreId: number
    categorieId: number
    _count: LivreCategorieCountAggregateOutputType | null
    _avg: LivreCategorieAvgAggregateOutputType | null
    _sum: LivreCategorieSumAggregateOutputType | null
    _min: LivreCategorieMinAggregateOutputType | null
    _max: LivreCategorieMaxAggregateOutputType | null
  }

  type GetLivreCategorieGroupByPayload<T extends LivreCategorieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LivreCategorieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LivreCategorieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LivreCategorieGroupByOutputType[P]>
            : GetScalarType<T[P], LivreCategorieGroupByOutputType[P]>
        }
      >
    >


  export type LivreCategorieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    livreId?: boolean
    categorieId?: boolean
    livre?: boolean | LivreDefaultArgs<ExtArgs>
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livreCategorie"]>

  export type LivreCategorieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    livreId?: boolean
    categorieId?: boolean
    livre?: boolean | LivreDefaultArgs<ExtArgs>
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livreCategorie"]>

  export type LivreCategorieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    livreId?: boolean
    categorieId?: boolean
    livre?: boolean | LivreDefaultArgs<ExtArgs>
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livreCategorie"]>

  export type LivreCategorieSelectScalar = {
    livreId?: boolean
    categorieId?: boolean
  }

  export type LivreCategorieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"livreId" | "categorieId", ExtArgs["result"]["livreCategorie"]>
  export type LivreCategorieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livre?: boolean | LivreDefaultArgs<ExtArgs>
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
  }
  export type LivreCategorieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livre?: boolean | LivreDefaultArgs<ExtArgs>
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
  }
  export type LivreCategorieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livre?: boolean | LivreDefaultArgs<ExtArgs>
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
  }

  export type $LivreCategoriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LivreCategorie"
    objects: {
      livre: Prisma.$LivrePayload<ExtArgs>
      categorie: Prisma.$CategoriePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      livreId: number
      categorieId: number
    }, ExtArgs["result"]["livreCategorie"]>
    composites: {}
  }

  type LivreCategorieGetPayload<S extends boolean | null | undefined | LivreCategorieDefaultArgs> = $Result.GetResult<Prisma.$LivreCategoriePayload, S>

  type LivreCategorieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LivreCategorieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LivreCategorieCountAggregateInputType | true
    }

  export interface LivreCategorieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LivreCategorie'], meta: { name: 'LivreCategorie' } }
    /**
     * Find zero or one LivreCategorie that matches the filter.
     * @param {LivreCategorieFindUniqueArgs} args - Arguments to find a LivreCategorie
     * @example
     * // Get one LivreCategorie
     * const livreCategorie = await prisma.livreCategorie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LivreCategorieFindUniqueArgs>(args: SelectSubset<T, LivreCategorieFindUniqueArgs<ExtArgs>>): Prisma__LivreCategorieClient<$Result.GetResult<Prisma.$LivreCategoriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LivreCategorie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LivreCategorieFindUniqueOrThrowArgs} args - Arguments to find a LivreCategorie
     * @example
     * // Get one LivreCategorie
     * const livreCategorie = await prisma.livreCategorie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LivreCategorieFindUniqueOrThrowArgs>(args: SelectSubset<T, LivreCategorieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LivreCategorieClient<$Result.GetResult<Prisma.$LivreCategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LivreCategorie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreCategorieFindFirstArgs} args - Arguments to find a LivreCategorie
     * @example
     * // Get one LivreCategorie
     * const livreCategorie = await prisma.livreCategorie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LivreCategorieFindFirstArgs>(args?: SelectSubset<T, LivreCategorieFindFirstArgs<ExtArgs>>): Prisma__LivreCategorieClient<$Result.GetResult<Prisma.$LivreCategoriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LivreCategorie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreCategorieFindFirstOrThrowArgs} args - Arguments to find a LivreCategorie
     * @example
     * // Get one LivreCategorie
     * const livreCategorie = await prisma.livreCategorie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LivreCategorieFindFirstOrThrowArgs>(args?: SelectSubset<T, LivreCategorieFindFirstOrThrowArgs<ExtArgs>>): Prisma__LivreCategorieClient<$Result.GetResult<Prisma.$LivreCategoriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LivreCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreCategorieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LivreCategories
     * const livreCategories = await prisma.livreCategorie.findMany()
     * 
     * // Get first 10 LivreCategories
     * const livreCategories = await prisma.livreCategorie.findMany({ take: 10 })
     * 
     * // Only select the `livreId`
     * const livreCategorieWithLivreIdOnly = await prisma.livreCategorie.findMany({ select: { livreId: true } })
     * 
     */
    findMany<T extends LivreCategorieFindManyArgs>(args?: SelectSubset<T, LivreCategorieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivreCategoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LivreCategorie.
     * @param {LivreCategorieCreateArgs} args - Arguments to create a LivreCategorie.
     * @example
     * // Create one LivreCategorie
     * const LivreCategorie = await prisma.livreCategorie.create({
     *   data: {
     *     // ... data to create a LivreCategorie
     *   }
     * })
     * 
     */
    create<T extends LivreCategorieCreateArgs>(args: SelectSubset<T, LivreCategorieCreateArgs<ExtArgs>>): Prisma__LivreCategorieClient<$Result.GetResult<Prisma.$LivreCategoriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LivreCategories.
     * @param {LivreCategorieCreateManyArgs} args - Arguments to create many LivreCategories.
     * @example
     * // Create many LivreCategories
     * const livreCategorie = await prisma.livreCategorie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LivreCategorieCreateManyArgs>(args?: SelectSubset<T, LivreCategorieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LivreCategories and returns the data saved in the database.
     * @param {LivreCategorieCreateManyAndReturnArgs} args - Arguments to create many LivreCategories.
     * @example
     * // Create many LivreCategories
     * const livreCategorie = await prisma.livreCategorie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LivreCategories and only return the `livreId`
     * const livreCategorieWithLivreIdOnly = await prisma.livreCategorie.createManyAndReturn({
     *   select: { livreId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LivreCategorieCreateManyAndReturnArgs>(args?: SelectSubset<T, LivreCategorieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivreCategoriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LivreCategorie.
     * @param {LivreCategorieDeleteArgs} args - Arguments to delete one LivreCategorie.
     * @example
     * // Delete one LivreCategorie
     * const LivreCategorie = await prisma.livreCategorie.delete({
     *   where: {
     *     // ... filter to delete one LivreCategorie
     *   }
     * })
     * 
     */
    delete<T extends LivreCategorieDeleteArgs>(args: SelectSubset<T, LivreCategorieDeleteArgs<ExtArgs>>): Prisma__LivreCategorieClient<$Result.GetResult<Prisma.$LivreCategoriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LivreCategorie.
     * @param {LivreCategorieUpdateArgs} args - Arguments to update one LivreCategorie.
     * @example
     * // Update one LivreCategorie
     * const livreCategorie = await prisma.livreCategorie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LivreCategorieUpdateArgs>(args: SelectSubset<T, LivreCategorieUpdateArgs<ExtArgs>>): Prisma__LivreCategorieClient<$Result.GetResult<Prisma.$LivreCategoriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LivreCategories.
     * @param {LivreCategorieDeleteManyArgs} args - Arguments to filter LivreCategories to delete.
     * @example
     * // Delete a few LivreCategories
     * const { count } = await prisma.livreCategorie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LivreCategorieDeleteManyArgs>(args?: SelectSubset<T, LivreCategorieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LivreCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreCategorieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LivreCategories
     * const livreCategorie = await prisma.livreCategorie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LivreCategorieUpdateManyArgs>(args: SelectSubset<T, LivreCategorieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LivreCategories and returns the data updated in the database.
     * @param {LivreCategorieUpdateManyAndReturnArgs} args - Arguments to update many LivreCategories.
     * @example
     * // Update many LivreCategories
     * const livreCategorie = await prisma.livreCategorie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LivreCategories and only return the `livreId`
     * const livreCategorieWithLivreIdOnly = await prisma.livreCategorie.updateManyAndReturn({
     *   select: { livreId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LivreCategorieUpdateManyAndReturnArgs>(args: SelectSubset<T, LivreCategorieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivreCategoriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LivreCategorie.
     * @param {LivreCategorieUpsertArgs} args - Arguments to update or create a LivreCategorie.
     * @example
     * // Update or create a LivreCategorie
     * const livreCategorie = await prisma.livreCategorie.upsert({
     *   create: {
     *     // ... data to create a LivreCategorie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LivreCategorie we want to update
     *   }
     * })
     */
    upsert<T extends LivreCategorieUpsertArgs>(args: SelectSubset<T, LivreCategorieUpsertArgs<ExtArgs>>): Prisma__LivreCategorieClient<$Result.GetResult<Prisma.$LivreCategoriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LivreCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreCategorieCountArgs} args - Arguments to filter LivreCategories to count.
     * @example
     * // Count the number of LivreCategories
     * const count = await prisma.livreCategorie.count({
     *   where: {
     *     // ... the filter for the LivreCategories we want to count
     *   }
     * })
    **/
    count<T extends LivreCategorieCountArgs>(
      args?: Subset<T, LivreCategorieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LivreCategorieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LivreCategorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreCategorieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LivreCategorieAggregateArgs>(args: Subset<T, LivreCategorieAggregateArgs>): Prisma.PrismaPromise<GetLivreCategorieAggregateType<T>>

    /**
     * Group by LivreCategorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreCategorieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LivreCategorieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LivreCategorieGroupByArgs['orderBy'] }
        : { orderBy?: LivreCategorieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LivreCategorieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivreCategorieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LivreCategorie model
   */
  readonly fields: LivreCategorieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LivreCategorie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LivreCategorieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livre<T extends LivreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LivreDefaultArgs<ExtArgs>>): Prisma__LivreClient<$Result.GetResult<Prisma.$LivrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categorie<T extends CategorieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategorieDefaultArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LivreCategorie model
   */
  interface LivreCategorieFieldRefs {
    readonly livreId: FieldRef<"LivreCategorie", 'Int'>
    readonly categorieId: FieldRef<"LivreCategorie", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LivreCategorie findUnique
   */
  export type LivreCategorieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivreCategorie
     */
    select?: LivreCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivreCategorie
     */
    omit?: LivreCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreCategorieInclude<ExtArgs> | null
    /**
     * Filter, which LivreCategorie to fetch.
     */
    where: LivreCategorieWhereUniqueInput
  }

  /**
   * LivreCategorie findUniqueOrThrow
   */
  export type LivreCategorieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivreCategorie
     */
    select?: LivreCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivreCategorie
     */
    omit?: LivreCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreCategorieInclude<ExtArgs> | null
    /**
     * Filter, which LivreCategorie to fetch.
     */
    where: LivreCategorieWhereUniqueInput
  }

  /**
   * LivreCategorie findFirst
   */
  export type LivreCategorieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivreCategorie
     */
    select?: LivreCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivreCategorie
     */
    omit?: LivreCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreCategorieInclude<ExtArgs> | null
    /**
     * Filter, which LivreCategorie to fetch.
     */
    where?: LivreCategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LivreCategories to fetch.
     */
    orderBy?: LivreCategorieOrderByWithRelationInput | LivreCategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LivreCategories.
     */
    cursor?: LivreCategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LivreCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LivreCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LivreCategories.
     */
    distinct?: LivreCategorieScalarFieldEnum | LivreCategorieScalarFieldEnum[]
  }

  /**
   * LivreCategorie findFirstOrThrow
   */
  export type LivreCategorieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivreCategorie
     */
    select?: LivreCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivreCategorie
     */
    omit?: LivreCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreCategorieInclude<ExtArgs> | null
    /**
     * Filter, which LivreCategorie to fetch.
     */
    where?: LivreCategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LivreCategories to fetch.
     */
    orderBy?: LivreCategorieOrderByWithRelationInput | LivreCategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LivreCategories.
     */
    cursor?: LivreCategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LivreCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LivreCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LivreCategories.
     */
    distinct?: LivreCategorieScalarFieldEnum | LivreCategorieScalarFieldEnum[]
  }

  /**
   * LivreCategorie findMany
   */
  export type LivreCategorieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivreCategorie
     */
    select?: LivreCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivreCategorie
     */
    omit?: LivreCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreCategorieInclude<ExtArgs> | null
    /**
     * Filter, which LivreCategories to fetch.
     */
    where?: LivreCategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LivreCategories to fetch.
     */
    orderBy?: LivreCategorieOrderByWithRelationInput | LivreCategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LivreCategories.
     */
    cursor?: LivreCategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LivreCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LivreCategories.
     */
    skip?: number
    distinct?: LivreCategorieScalarFieldEnum | LivreCategorieScalarFieldEnum[]
  }

  /**
   * LivreCategorie create
   */
  export type LivreCategorieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivreCategorie
     */
    select?: LivreCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivreCategorie
     */
    omit?: LivreCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreCategorieInclude<ExtArgs> | null
    /**
     * The data needed to create a LivreCategorie.
     */
    data: XOR<LivreCategorieCreateInput, LivreCategorieUncheckedCreateInput>
  }

  /**
   * LivreCategorie createMany
   */
  export type LivreCategorieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LivreCategories.
     */
    data: LivreCategorieCreateManyInput | LivreCategorieCreateManyInput[]
  }

  /**
   * LivreCategorie createManyAndReturn
   */
  export type LivreCategorieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivreCategorie
     */
    select?: LivreCategorieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LivreCategorie
     */
    omit?: LivreCategorieOmit<ExtArgs> | null
    /**
     * The data used to create many LivreCategories.
     */
    data: LivreCategorieCreateManyInput | LivreCategorieCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreCategorieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LivreCategorie update
   */
  export type LivreCategorieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivreCategorie
     */
    select?: LivreCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivreCategorie
     */
    omit?: LivreCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreCategorieInclude<ExtArgs> | null
    /**
     * The data needed to update a LivreCategorie.
     */
    data: XOR<LivreCategorieUpdateInput, LivreCategorieUncheckedUpdateInput>
    /**
     * Choose, which LivreCategorie to update.
     */
    where: LivreCategorieWhereUniqueInput
  }

  /**
   * LivreCategorie updateMany
   */
  export type LivreCategorieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LivreCategories.
     */
    data: XOR<LivreCategorieUpdateManyMutationInput, LivreCategorieUncheckedUpdateManyInput>
    /**
     * Filter which LivreCategories to update
     */
    where?: LivreCategorieWhereInput
    /**
     * Limit how many LivreCategories to update.
     */
    limit?: number
  }

  /**
   * LivreCategorie updateManyAndReturn
   */
  export type LivreCategorieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivreCategorie
     */
    select?: LivreCategorieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LivreCategorie
     */
    omit?: LivreCategorieOmit<ExtArgs> | null
    /**
     * The data used to update LivreCategories.
     */
    data: XOR<LivreCategorieUpdateManyMutationInput, LivreCategorieUncheckedUpdateManyInput>
    /**
     * Filter which LivreCategories to update
     */
    where?: LivreCategorieWhereInput
    /**
     * Limit how many LivreCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreCategorieIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LivreCategorie upsert
   */
  export type LivreCategorieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivreCategorie
     */
    select?: LivreCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivreCategorie
     */
    omit?: LivreCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreCategorieInclude<ExtArgs> | null
    /**
     * The filter to search for the LivreCategorie to update in case it exists.
     */
    where: LivreCategorieWhereUniqueInput
    /**
     * In case the LivreCategorie found by the `where` argument doesn't exist, create a new LivreCategorie with this data.
     */
    create: XOR<LivreCategorieCreateInput, LivreCategorieUncheckedCreateInput>
    /**
     * In case the LivreCategorie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LivreCategorieUpdateInput, LivreCategorieUncheckedUpdateInput>
  }

  /**
   * LivreCategorie delete
   */
  export type LivreCategorieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivreCategorie
     */
    select?: LivreCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivreCategorie
     */
    omit?: LivreCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreCategorieInclude<ExtArgs> | null
    /**
     * Filter which LivreCategorie to delete.
     */
    where: LivreCategorieWhereUniqueInput
  }

  /**
   * LivreCategorie deleteMany
   */
  export type LivreCategorieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LivreCategories to delete
     */
    where?: LivreCategorieWhereInput
    /**
     * Limit how many LivreCategories to delete.
     */
    limit?: number
  }

  /**
   * LivreCategorie without action
   */
  export type LivreCategorieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivreCategorie
     */
    select?: LivreCategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LivreCategorie
     */
    omit?: LivreCategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivreCategorieInclude<ExtArgs> | null
  }


  /**
   * Model Emprunt
   */

  export type AggregateEmprunt = {
    _count: EmpruntCountAggregateOutputType | null
    _avg: EmpruntAvgAggregateOutputType | null
    _sum: EmpruntSumAggregateOutputType | null
    _min: EmpruntMinAggregateOutputType | null
    _max: EmpruntMaxAggregateOutputType | null
  }

  export type EmpruntAvgAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    livreId: number | null
  }

  export type EmpruntSumAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    livreId: number | null
  }

  export type EmpruntMinAggregateOutputType = {
    id: number | null
    dateEmprunt: Date | null
    dateRetour: Date | null
    statut: $Enums.StatutEmprunt | null
    utilisateurId: number | null
    livreId: number | null
  }

  export type EmpruntMaxAggregateOutputType = {
    id: number | null
    dateEmprunt: Date | null
    dateRetour: Date | null
    statut: $Enums.StatutEmprunt | null
    utilisateurId: number | null
    livreId: number | null
  }

  export type EmpruntCountAggregateOutputType = {
    id: number
    dateEmprunt: number
    dateRetour: number
    statut: number
    utilisateurId: number
    livreId: number
    _all: number
  }


  export type EmpruntAvgAggregateInputType = {
    id?: true
    utilisateurId?: true
    livreId?: true
  }

  export type EmpruntSumAggregateInputType = {
    id?: true
    utilisateurId?: true
    livreId?: true
  }

  export type EmpruntMinAggregateInputType = {
    id?: true
    dateEmprunt?: true
    dateRetour?: true
    statut?: true
    utilisateurId?: true
    livreId?: true
  }

  export type EmpruntMaxAggregateInputType = {
    id?: true
    dateEmprunt?: true
    dateRetour?: true
    statut?: true
    utilisateurId?: true
    livreId?: true
  }

  export type EmpruntCountAggregateInputType = {
    id?: true
    dateEmprunt?: true
    dateRetour?: true
    statut?: true
    utilisateurId?: true
    livreId?: true
    _all?: true
  }

  export type EmpruntAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emprunt to aggregate.
     */
    where?: EmpruntWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprunts to fetch.
     */
    orderBy?: EmpruntOrderByWithRelationInput | EmpruntOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpruntWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprunts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprunts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emprunts
    **/
    _count?: true | EmpruntCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpruntAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpruntSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpruntMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpruntMaxAggregateInputType
  }

  export type GetEmpruntAggregateType<T extends EmpruntAggregateArgs> = {
        [P in keyof T & keyof AggregateEmprunt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmprunt[P]>
      : GetScalarType<T[P], AggregateEmprunt[P]>
  }




  export type EmpruntGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpruntWhereInput
    orderBy?: EmpruntOrderByWithAggregationInput | EmpruntOrderByWithAggregationInput[]
    by: EmpruntScalarFieldEnum[] | EmpruntScalarFieldEnum
    having?: EmpruntScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpruntCountAggregateInputType | true
    _avg?: EmpruntAvgAggregateInputType
    _sum?: EmpruntSumAggregateInputType
    _min?: EmpruntMinAggregateInputType
    _max?: EmpruntMaxAggregateInputType
  }

  export type EmpruntGroupByOutputType = {
    id: number
    dateEmprunt: Date
    dateRetour: Date | null
    statut: $Enums.StatutEmprunt
    utilisateurId: number
    livreId: number
    _count: EmpruntCountAggregateOutputType | null
    _avg: EmpruntAvgAggregateOutputType | null
    _sum: EmpruntSumAggregateOutputType | null
    _min: EmpruntMinAggregateOutputType | null
    _max: EmpruntMaxAggregateOutputType | null
  }

  type GetEmpruntGroupByPayload<T extends EmpruntGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpruntGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpruntGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpruntGroupByOutputType[P]>
            : GetScalarType<T[P], EmpruntGroupByOutputType[P]>
        }
      >
    >


  export type EmpruntSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateEmprunt?: boolean
    dateRetour?: boolean
    statut?: boolean
    utilisateurId?: boolean
    livreId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    livre?: boolean | LivreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprunt"]>

  export type EmpruntSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateEmprunt?: boolean
    dateRetour?: boolean
    statut?: boolean
    utilisateurId?: boolean
    livreId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    livre?: boolean | LivreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprunt"]>

  export type EmpruntSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateEmprunt?: boolean
    dateRetour?: boolean
    statut?: boolean
    utilisateurId?: boolean
    livreId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    livre?: boolean | LivreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprunt"]>

  export type EmpruntSelectScalar = {
    id?: boolean
    dateEmprunt?: boolean
    dateRetour?: boolean
    statut?: boolean
    utilisateurId?: boolean
    livreId?: boolean
  }

  export type EmpruntOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dateEmprunt" | "dateRetour" | "statut" | "utilisateurId" | "livreId", ExtArgs["result"]["emprunt"]>
  export type EmpruntInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    livre?: boolean | LivreDefaultArgs<ExtArgs>
  }
  export type EmpruntIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    livre?: boolean | LivreDefaultArgs<ExtArgs>
  }
  export type EmpruntIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    livre?: boolean | LivreDefaultArgs<ExtArgs>
  }

  export type $EmpruntPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Emprunt"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      livre: Prisma.$LivrePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dateEmprunt: Date
      dateRetour: Date | null
      statut: $Enums.StatutEmprunt
      utilisateurId: number
      livreId: number
    }, ExtArgs["result"]["emprunt"]>
    composites: {}
  }

  type EmpruntGetPayload<S extends boolean | null | undefined | EmpruntDefaultArgs> = $Result.GetResult<Prisma.$EmpruntPayload, S>

  type EmpruntCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpruntFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpruntCountAggregateInputType | true
    }

  export interface EmpruntDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Emprunt'], meta: { name: 'Emprunt' } }
    /**
     * Find zero or one Emprunt that matches the filter.
     * @param {EmpruntFindUniqueArgs} args - Arguments to find a Emprunt
     * @example
     * // Get one Emprunt
     * const emprunt = await prisma.emprunt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpruntFindUniqueArgs>(args: SelectSubset<T, EmpruntFindUniqueArgs<ExtArgs>>): Prisma__EmpruntClient<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Emprunt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpruntFindUniqueOrThrowArgs} args - Arguments to find a Emprunt
     * @example
     * // Get one Emprunt
     * const emprunt = await prisma.emprunt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpruntFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpruntFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpruntClient<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprunt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntFindFirstArgs} args - Arguments to find a Emprunt
     * @example
     * // Get one Emprunt
     * const emprunt = await prisma.emprunt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpruntFindFirstArgs>(args?: SelectSubset<T, EmpruntFindFirstArgs<ExtArgs>>): Prisma__EmpruntClient<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprunt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntFindFirstOrThrowArgs} args - Arguments to find a Emprunt
     * @example
     * // Get one Emprunt
     * const emprunt = await prisma.emprunt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpruntFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpruntFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpruntClient<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emprunts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emprunts
     * const emprunts = await prisma.emprunt.findMany()
     * 
     * // Get first 10 Emprunts
     * const emprunts = await prisma.emprunt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empruntWithIdOnly = await prisma.emprunt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpruntFindManyArgs>(args?: SelectSubset<T, EmpruntFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Emprunt.
     * @param {EmpruntCreateArgs} args - Arguments to create a Emprunt.
     * @example
     * // Create one Emprunt
     * const Emprunt = await prisma.emprunt.create({
     *   data: {
     *     // ... data to create a Emprunt
     *   }
     * })
     * 
     */
    create<T extends EmpruntCreateArgs>(args: SelectSubset<T, EmpruntCreateArgs<ExtArgs>>): Prisma__EmpruntClient<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emprunts.
     * @param {EmpruntCreateManyArgs} args - Arguments to create many Emprunts.
     * @example
     * // Create many Emprunts
     * const emprunt = await prisma.emprunt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpruntCreateManyArgs>(args?: SelectSubset<T, EmpruntCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emprunts and returns the data saved in the database.
     * @param {EmpruntCreateManyAndReturnArgs} args - Arguments to create many Emprunts.
     * @example
     * // Create many Emprunts
     * const emprunt = await prisma.emprunt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emprunts and only return the `id`
     * const empruntWithIdOnly = await prisma.emprunt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmpruntCreateManyAndReturnArgs>(args?: SelectSubset<T, EmpruntCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Emprunt.
     * @param {EmpruntDeleteArgs} args - Arguments to delete one Emprunt.
     * @example
     * // Delete one Emprunt
     * const Emprunt = await prisma.emprunt.delete({
     *   where: {
     *     // ... filter to delete one Emprunt
     *   }
     * })
     * 
     */
    delete<T extends EmpruntDeleteArgs>(args: SelectSubset<T, EmpruntDeleteArgs<ExtArgs>>): Prisma__EmpruntClient<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Emprunt.
     * @param {EmpruntUpdateArgs} args - Arguments to update one Emprunt.
     * @example
     * // Update one Emprunt
     * const emprunt = await prisma.emprunt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpruntUpdateArgs>(args: SelectSubset<T, EmpruntUpdateArgs<ExtArgs>>): Prisma__EmpruntClient<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emprunts.
     * @param {EmpruntDeleteManyArgs} args - Arguments to filter Emprunts to delete.
     * @example
     * // Delete a few Emprunts
     * const { count } = await prisma.emprunt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpruntDeleteManyArgs>(args?: SelectSubset<T, EmpruntDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprunts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emprunts
     * const emprunt = await prisma.emprunt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpruntUpdateManyArgs>(args: SelectSubset<T, EmpruntUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprunts and returns the data updated in the database.
     * @param {EmpruntUpdateManyAndReturnArgs} args - Arguments to update many Emprunts.
     * @example
     * // Update many Emprunts
     * const emprunt = await prisma.emprunt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emprunts and only return the `id`
     * const empruntWithIdOnly = await prisma.emprunt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmpruntUpdateManyAndReturnArgs>(args: SelectSubset<T, EmpruntUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Emprunt.
     * @param {EmpruntUpsertArgs} args - Arguments to update or create a Emprunt.
     * @example
     * // Update or create a Emprunt
     * const emprunt = await prisma.emprunt.upsert({
     *   create: {
     *     // ... data to create a Emprunt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emprunt we want to update
     *   }
     * })
     */
    upsert<T extends EmpruntUpsertArgs>(args: SelectSubset<T, EmpruntUpsertArgs<ExtArgs>>): Prisma__EmpruntClient<$Result.GetResult<Prisma.$EmpruntPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emprunts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntCountArgs} args - Arguments to filter Emprunts to count.
     * @example
     * // Count the number of Emprunts
     * const count = await prisma.emprunt.count({
     *   where: {
     *     // ... the filter for the Emprunts we want to count
     *   }
     * })
    **/
    count<T extends EmpruntCountArgs>(
      args?: Subset<T, EmpruntCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpruntCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emprunt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmpruntAggregateArgs>(args: Subset<T, EmpruntAggregateArgs>): Prisma.PrismaPromise<GetEmpruntAggregateType<T>>

    /**
     * Group by Emprunt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmpruntGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpruntGroupByArgs['orderBy'] }
        : { orderBy?: EmpruntGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmpruntGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpruntGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Emprunt model
   */
  readonly fields: EmpruntFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Emprunt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpruntClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    livre<T extends LivreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LivreDefaultArgs<ExtArgs>>): Prisma__LivreClient<$Result.GetResult<Prisma.$LivrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Emprunt model
   */
  interface EmpruntFieldRefs {
    readonly id: FieldRef<"Emprunt", 'Int'>
    readonly dateEmprunt: FieldRef<"Emprunt", 'DateTime'>
    readonly dateRetour: FieldRef<"Emprunt", 'DateTime'>
    readonly statut: FieldRef<"Emprunt", 'StatutEmprunt'>
    readonly utilisateurId: FieldRef<"Emprunt", 'Int'>
    readonly livreId: FieldRef<"Emprunt", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Emprunt findUnique
   */
  export type EmpruntFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    /**
     * Filter, which Emprunt to fetch.
     */
    where: EmpruntWhereUniqueInput
  }

  /**
   * Emprunt findUniqueOrThrow
   */
  export type EmpruntFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    /**
     * Filter, which Emprunt to fetch.
     */
    where: EmpruntWhereUniqueInput
  }

  /**
   * Emprunt findFirst
   */
  export type EmpruntFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    /**
     * Filter, which Emprunt to fetch.
     */
    where?: EmpruntWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprunts to fetch.
     */
    orderBy?: EmpruntOrderByWithRelationInput | EmpruntOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emprunts.
     */
    cursor?: EmpruntWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprunts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprunts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprunts.
     */
    distinct?: EmpruntScalarFieldEnum | EmpruntScalarFieldEnum[]
  }

  /**
   * Emprunt findFirstOrThrow
   */
  export type EmpruntFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    /**
     * Filter, which Emprunt to fetch.
     */
    where?: EmpruntWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprunts to fetch.
     */
    orderBy?: EmpruntOrderByWithRelationInput | EmpruntOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emprunts.
     */
    cursor?: EmpruntWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprunts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprunts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprunts.
     */
    distinct?: EmpruntScalarFieldEnum | EmpruntScalarFieldEnum[]
  }

  /**
   * Emprunt findMany
   */
  export type EmpruntFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    /**
     * Filter, which Emprunts to fetch.
     */
    where?: EmpruntWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprunts to fetch.
     */
    orderBy?: EmpruntOrderByWithRelationInput | EmpruntOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emprunts.
     */
    cursor?: EmpruntWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprunts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprunts.
     */
    skip?: number
    distinct?: EmpruntScalarFieldEnum | EmpruntScalarFieldEnum[]
  }

  /**
   * Emprunt create
   */
  export type EmpruntCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    /**
     * The data needed to create a Emprunt.
     */
    data: XOR<EmpruntCreateInput, EmpruntUncheckedCreateInput>
  }

  /**
   * Emprunt createMany
   */
  export type EmpruntCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emprunts.
     */
    data: EmpruntCreateManyInput | EmpruntCreateManyInput[]
  }

  /**
   * Emprunt createManyAndReturn
   */
  export type EmpruntCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * The data used to create many Emprunts.
     */
    data: EmpruntCreateManyInput | EmpruntCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Emprunt update
   */
  export type EmpruntUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    /**
     * The data needed to update a Emprunt.
     */
    data: XOR<EmpruntUpdateInput, EmpruntUncheckedUpdateInput>
    /**
     * Choose, which Emprunt to update.
     */
    where: EmpruntWhereUniqueInput
  }

  /**
   * Emprunt updateMany
   */
  export type EmpruntUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emprunts.
     */
    data: XOR<EmpruntUpdateManyMutationInput, EmpruntUncheckedUpdateManyInput>
    /**
     * Filter which Emprunts to update
     */
    where?: EmpruntWhereInput
    /**
     * Limit how many Emprunts to update.
     */
    limit?: number
  }

  /**
   * Emprunt updateManyAndReturn
   */
  export type EmpruntUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * The data used to update Emprunts.
     */
    data: XOR<EmpruntUpdateManyMutationInput, EmpruntUncheckedUpdateManyInput>
    /**
     * Filter which Emprunts to update
     */
    where?: EmpruntWhereInput
    /**
     * Limit how many Emprunts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Emprunt upsert
   */
  export type EmpruntUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    /**
     * The filter to search for the Emprunt to update in case it exists.
     */
    where: EmpruntWhereUniqueInput
    /**
     * In case the Emprunt found by the `where` argument doesn't exist, create a new Emprunt with this data.
     */
    create: XOR<EmpruntCreateInput, EmpruntUncheckedCreateInput>
    /**
     * In case the Emprunt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpruntUpdateInput, EmpruntUncheckedUpdateInput>
  }

  /**
   * Emprunt delete
   */
  export type EmpruntDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
    /**
     * Filter which Emprunt to delete.
     */
    where: EmpruntWhereUniqueInput
  }

  /**
   * Emprunt deleteMany
   */
  export type EmpruntDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emprunts to delete
     */
    where?: EmpruntWhereInput
    /**
     * Limit how many Emprunts to delete.
     */
    limit?: number
  }

  /**
   * Emprunt without action
   */
  export type EmpruntDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunt
     */
    select?: EmpruntSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunt
     */
    omit?: EmpruntOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpruntInclude<ExtArgs> | null
  }


  /**
   * Model Avis
   */

  export type AggregateAvis = {
    _count: AvisCountAggregateOutputType | null
    _avg: AvisAvgAggregateOutputType | null
    _sum: AvisSumAggregateOutputType | null
    _min: AvisMinAggregateOutputType | null
    _max: AvisMaxAggregateOutputType | null
  }

  export type AvisAvgAggregateOutputType = {
    id: number | null
    note: number | null
    utilisateurId: number | null
    livreId: number | null
  }

  export type AvisSumAggregateOutputType = {
    id: number | null
    note: number | null
    utilisateurId: number | null
    livreId: number | null
  }

  export type AvisMinAggregateOutputType = {
    id: number | null
    note: number | null
    commentaire: string | null
    dateCreation: Date | null
    utilisateurId: number | null
    livreId: number | null
  }

  export type AvisMaxAggregateOutputType = {
    id: number | null
    note: number | null
    commentaire: string | null
    dateCreation: Date | null
    utilisateurId: number | null
    livreId: number | null
  }

  export type AvisCountAggregateOutputType = {
    id: number
    note: number
    commentaire: number
    dateCreation: number
    utilisateurId: number
    livreId: number
    _all: number
  }


  export type AvisAvgAggregateInputType = {
    id?: true
    note?: true
    utilisateurId?: true
    livreId?: true
  }

  export type AvisSumAggregateInputType = {
    id?: true
    note?: true
    utilisateurId?: true
    livreId?: true
  }

  export type AvisMinAggregateInputType = {
    id?: true
    note?: true
    commentaire?: true
    dateCreation?: true
    utilisateurId?: true
    livreId?: true
  }

  export type AvisMaxAggregateInputType = {
    id?: true
    note?: true
    commentaire?: true
    dateCreation?: true
    utilisateurId?: true
    livreId?: true
  }

  export type AvisCountAggregateInputType = {
    id?: true
    note?: true
    commentaire?: true
    dateCreation?: true
    utilisateurId?: true
    livreId?: true
    _all?: true
  }

  export type AvisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avis to aggregate.
     */
    where?: AvisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avis to fetch.
     */
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avis
    **/
    _count?: true | AvisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvisMaxAggregateInputType
  }

  export type GetAvisAggregateType<T extends AvisAggregateArgs> = {
        [P in keyof T & keyof AggregateAvis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvis[P]>
      : GetScalarType<T[P], AggregateAvis[P]>
  }




  export type AvisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvisWhereInput
    orderBy?: AvisOrderByWithAggregationInput | AvisOrderByWithAggregationInput[]
    by: AvisScalarFieldEnum[] | AvisScalarFieldEnum
    having?: AvisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvisCountAggregateInputType | true
    _avg?: AvisAvgAggregateInputType
    _sum?: AvisSumAggregateInputType
    _min?: AvisMinAggregateInputType
    _max?: AvisMaxAggregateInputType
  }

  export type AvisGroupByOutputType = {
    id: number
    note: number
    commentaire: string | null
    dateCreation: Date
    utilisateurId: number
    livreId: number
    _count: AvisCountAggregateOutputType | null
    _avg: AvisAvgAggregateOutputType | null
    _sum: AvisSumAggregateOutputType | null
    _min: AvisMinAggregateOutputType | null
    _max: AvisMaxAggregateOutputType | null
  }

  type GetAvisGroupByPayload<T extends AvisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvisGroupByOutputType[P]>
            : GetScalarType<T[P], AvisGroupByOutputType[P]>
        }
      >
    >


  export type AvisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note?: boolean
    commentaire?: boolean
    dateCreation?: boolean
    utilisateurId?: boolean
    livreId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    livre?: boolean | LivreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avis"]>

  export type AvisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note?: boolean
    commentaire?: boolean
    dateCreation?: boolean
    utilisateurId?: boolean
    livreId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    livre?: boolean | LivreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avis"]>

  export type AvisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note?: boolean
    commentaire?: boolean
    dateCreation?: boolean
    utilisateurId?: boolean
    livreId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    livre?: boolean | LivreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avis"]>

  export type AvisSelectScalar = {
    id?: boolean
    note?: boolean
    commentaire?: boolean
    dateCreation?: boolean
    utilisateurId?: boolean
    livreId?: boolean
  }

  export type AvisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "note" | "commentaire" | "dateCreation" | "utilisateurId" | "livreId", ExtArgs["result"]["avis"]>
  export type AvisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    livre?: boolean | LivreDefaultArgs<ExtArgs>
  }
  export type AvisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    livre?: boolean | LivreDefaultArgs<ExtArgs>
  }
  export type AvisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    livre?: boolean | LivreDefaultArgs<ExtArgs>
  }

  export type $AvisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avis"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      livre: Prisma.$LivrePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      note: number
      commentaire: string | null
      dateCreation: Date
      utilisateurId: number
      livreId: number
    }, ExtArgs["result"]["avis"]>
    composites: {}
  }

  type AvisGetPayload<S extends boolean | null | undefined | AvisDefaultArgs> = $Result.GetResult<Prisma.$AvisPayload, S>

  type AvisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvisCountAggregateInputType | true
    }

  export interface AvisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avis'], meta: { name: 'Avis' } }
    /**
     * Find zero or one Avis that matches the filter.
     * @param {AvisFindUniqueArgs} args - Arguments to find a Avis
     * @example
     * // Get one Avis
     * const avis = await prisma.avis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvisFindUniqueArgs>(args: SelectSubset<T, AvisFindUniqueArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvisFindUniqueOrThrowArgs} args - Arguments to find a Avis
     * @example
     * // Get one Avis
     * const avis = await prisma.avis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvisFindUniqueOrThrowArgs>(args: SelectSubset<T, AvisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisFindFirstArgs} args - Arguments to find a Avis
     * @example
     * // Get one Avis
     * const avis = await prisma.avis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvisFindFirstArgs>(args?: SelectSubset<T, AvisFindFirstArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisFindFirstOrThrowArgs} args - Arguments to find a Avis
     * @example
     * // Get one Avis
     * const avis = await prisma.avis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvisFindFirstOrThrowArgs>(args?: SelectSubset<T, AvisFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avis
     * const avis = await prisma.avis.findMany()
     * 
     * // Get first 10 Avis
     * const avis = await prisma.avis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avisWithIdOnly = await prisma.avis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvisFindManyArgs>(args?: SelectSubset<T, AvisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avis.
     * @param {AvisCreateArgs} args - Arguments to create a Avis.
     * @example
     * // Create one Avis
     * const Avis = await prisma.avis.create({
     *   data: {
     *     // ... data to create a Avis
     *   }
     * })
     * 
     */
    create<T extends AvisCreateArgs>(args: SelectSubset<T, AvisCreateArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avis.
     * @param {AvisCreateManyArgs} args - Arguments to create many Avis.
     * @example
     * // Create many Avis
     * const avis = await prisma.avis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvisCreateManyArgs>(args?: SelectSubset<T, AvisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avis and returns the data saved in the database.
     * @param {AvisCreateManyAndReturnArgs} args - Arguments to create many Avis.
     * @example
     * // Create many Avis
     * const avis = await prisma.avis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avis and only return the `id`
     * const avisWithIdOnly = await prisma.avis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvisCreateManyAndReturnArgs>(args?: SelectSubset<T, AvisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avis.
     * @param {AvisDeleteArgs} args - Arguments to delete one Avis.
     * @example
     * // Delete one Avis
     * const Avis = await prisma.avis.delete({
     *   where: {
     *     // ... filter to delete one Avis
     *   }
     * })
     * 
     */
    delete<T extends AvisDeleteArgs>(args: SelectSubset<T, AvisDeleteArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avis.
     * @param {AvisUpdateArgs} args - Arguments to update one Avis.
     * @example
     * // Update one Avis
     * const avis = await prisma.avis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvisUpdateArgs>(args: SelectSubset<T, AvisUpdateArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avis.
     * @param {AvisDeleteManyArgs} args - Arguments to filter Avis to delete.
     * @example
     * // Delete a few Avis
     * const { count } = await prisma.avis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvisDeleteManyArgs>(args?: SelectSubset<T, AvisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avis
     * const avis = await prisma.avis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvisUpdateManyArgs>(args: SelectSubset<T, AvisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avis and returns the data updated in the database.
     * @param {AvisUpdateManyAndReturnArgs} args - Arguments to update many Avis.
     * @example
     * // Update many Avis
     * const avis = await prisma.avis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avis and only return the `id`
     * const avisWithIdOnly = await prisma.avis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvisUpdateManyAndReturnArgs>(args: SelectSubset<T, AvisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avis.
     * @param {AvisUpsertArgs} args - Arguments to update or create a Avis.
     * @example
     * // Update or create a Avis
     * const avis = await prisma.avis.upsert({
     *   create: {
     *     // ... data to create a Avis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avis we want to update
     *   }
     * })
     */
    upsert<T extends AvisUpsertArgs>(args: SelectSubset<T, AvisUpsertArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisCountArgs} args - Arguments to filter Avis to count.
     * @example
     * // Count the number of Avis
     * const count = await prisma.avis.count({
     *   where: {
     *     // ... the filter for the Avis we want to count
     *   }
     * })
    **/
    count<T extends AvisCountArgs>(
      args?: Subset<T, AvisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvisAggregateArgs>(args: Subset<T, AvisAggregateArgs>): Prisma.PrismaPromise<GetAvisAggregateType<T>>

    /**
     * Group by Avis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvisGroupByArgs['orderBy'] }
        : { orderBy?: AvisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avis model
   */
  readonly fields: AvisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    livre<T extends LivreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LivreDefaultArgs<ExtArgs>>): Prisma__LivreClient<$Result.GetResult<Prisma.$LivrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Avis model
   */
  interface AvisFieldRefs {
    readonly id: FieldRef<"Avis", 'Int'>
    readonly note: FieldRef<"Avis", 'Int'>
    readonly commentaire: FieldRef<"Avis", 'String'>
    readonly dateCreation: FieldRef<"Avis", 'DateTime'>
    readonly utilisateurId: FieldRef<"Avis", 'Int'>
    readonly livreId: FieldRef<"Avis", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Avis findUnique
   */
  export type AvisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter, which Avis to fetch.
     */
    where: AvisWhereUniqueInput
  }

  /**
   * Avis findUniqueOrThrow
   */
  export type AvisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter, which Avis to fetch.
     */
    where: AvisWhereUniqueInput
  }

  /**
   * Avis findFirst
   */
  export type AvisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter, which Avis to fetch.
     */
    where?: AvisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avis to fetch.
     */
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avis.
     */
    cursor?: AvisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avis.
     */
    distinct?: AvisScalarFieldEnum | AvisScalarFieldEnum[]
  }

  /**
   * Avis findFirstOrThrow
   */
  export type AvisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter, which Avis to fetch.
     */
    where?: AvisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avis to fetch.
     */
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avis.
     */
    cursor?: AvisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avis.
     */
    distinct?: AvisScalarFieldEnum | AvisScalarFieldEnum[]
  }

  /**
   * Avis findMany
   */
  export type AvisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter, which Avis to fetch.
     */
    where?: AvisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avis to fetch.
     */
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avis.
     */
    cursor?: AvisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avis.
     */
    skip?: number
    distinct?: AvisScalarFieldEnum | AvisScalarFieldEnum[]
  }

  /**
   * Avis create
   */
  export type AvisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * The data needed to create a Avis.
     */
    data: XOR<AvisCreateInput, AvisUncheckedCreateInput>
  }

  /**
   * Avis createMany
   */
  export type AvisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avis.
     */
    data: AvisCreateManyInput | AvisCreateManyInput[]
  }

  /**
   * Avis createManyAndReturn
   */
  export type AvisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * The data used to create many Avis.
     */
    data: AvisCreateManyInput | AvisCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avis update
   */
  export type AvisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * The data needed to update a Avis.
     */
    data: XOR<AvisUpdateInput, AvisUncheckedUpdateInput>
    /**
     * Choose, which Avis to update.
     */
    where: AvisWhereUniqueInput
  }

  /**
   * Avis updateMany
   */
  export type AvisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avis.
     */
    data: XOR<AvisUpdateManyMutationInput, AvisUncheckedUpdateManyInput>
    /**
     * Filter which Avis to update
     */
    where?: AvisWhereInput
    /**
     * Limit how many Avis to update.
     */
    limit?: number
  }

  /**
   * Avis updateManyAndReturn
   */
  export type AvisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * The data used to update Avis.
     */
    data: XOR<AvisUpdateManyMutationInput, AvisUncheckedUpdateManyInput>
    /**
     * Filter which Avis to update
     */
    where?: AvisWhereInput
    /**
     * Limit how many Avis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avis upsert
   */
  export type AvisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * The filter to search for the Avis to update in case it exists.
     */
    where: AvisWhereUniqueInput
    /**
     * In case the Avis found by the `where` argument doesn't exist, create a new Avis with this data.
     */
    create: XOR<AvisCreateInput, AvisUncheckedCreateInput>
    /**
     * In case the Avis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvisUpdateInput, AvisUncheckedUpdateInput>
  }

  /**
   * Avis delete
   */
  export type AvisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter which Avis to delete.
     */
    where: AvisWhereUniqueInput
  }

  /**
   * Avis deleteMany
   */
  export type AvisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avis to delete
     */
    where?: AvisWhereInput
    /**
     * Limit how many Avis to delete.
     */
    limit?: number
  }

  /**
   * Avis without action
   */
  export type AvisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UtilisateurScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    email: 'email',
    dateCreation: 'dateCreation'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


  export const AuteurScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    biographie: 'biographie'
  };

  export type AuteurScalarFieldEnum = (typeof AuteurScalarFieldEnum)[keyof typeof AuteurScalarFieldEnum]


  export const LivreScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    description: 'description',
    disponible: 'disponible',
    dateCreation: 'dateCreation',
    auteurId: 'auteurId'
  };

  export type LivreScalarFieldEnum = (typeof LivreScalarFieldEnum)[keyof typeof LivreScalarFieldEnum]


  export const CategorieScalarFieldEnum: {
    id: 'id',
    nom: 'nom'
  };

  export type CategorieScalarFieldEnum = (typeof CategorieScalarFieldEnum)[keyof typeof CategorieScalarFieldEnum]


  export const LivreCategorieScalarFieldEnum: {
    livreId: 'livreId',
    categorieId: 'categorieId'
  };

  export type LivreCategorieScalarFieldEnum = (typeof LivreCategorieScalarFieldEnum)[keyof typeof LivreCategorieScalarFieldEnum]


  export const EmpruntScalarFieldEnum: {
    id: 'id',
    dateEmprunt: 'dateEmprunt',
    dateRetour: 'dateRetour',
    statut: 'statut',
    utilisateurId: 'utilisateurId',
    livreId: 'livreId'
  };

  export type EmpruntScalarFieldEnum = (typeof EmpruntScalarFieldEnum)[keyof typeof EmpruntScalarFieldEnum]


  export const AvisScalarFieldEnum: {
    id: 'id',
    note: 'note',
    commentaire: 'commentaire',
    dateCreation: 'dateCreation',
    utilisateurId: 'utilisateurId',
    livreId: 'livreId'
  };

  export type AvisScalarFieldEnum = (typeof AvisScalarFieldEnum)[keyof typeof AvisScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StatutEmprunt'
   */
  export type EnumStatutEmpruntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutEmprunt'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UtilisateurWhereInput = {
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    id?: IntFilter<"Utilisateur"> | number
    nom?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    dateCreation?: DateTimeFilter<"Utilisateur"> | Date | string
    emprunts?: EmpruntListRelationFilter
    avis?: AvisListRelationFilter
  }

  export type UtilisateurOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    dateCreation?: SortOrder
    emprunts?: EmpruntOrderByRelationAggregateInput
    avis?: AvisOrderByRelationAggregateInput
  }

  export type UtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    nom?: StringFilter<"Utilisateur"> | string
    dateCreation?: DateTimeFilter<"Utilisateur"> | Date | string
    emprunts?: EmpruntListRelationFilter
    avis?: AvisListRelationFilter
  }, "id" | "email">

  export type UtilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    dateCreation?: SortOrder
    _count?: UtilisateurCountOrderByAggregateInput
    _avg?: UtilisateurAvgOrderByAggregateInput
    _max?: UtilisateurMaxOrderByAggregateInput
    _min?: UtilisateurMinOrderByAggregateInput
    _sum?: UtilisateurSumOrderByAggregateInput
  }

  export type UtilisateurScalarWhereWithAggregatesInput = {
    AND?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    OR?: UtilisateurScalarWhereWithAggregatesInput[]
    NOT?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Utilisateur"> | number
    nom?: StringWithAggregatesFilter<"Utilisateur"> | string
    email?: StringWithAggregatesFilter<"Utilisateur"> | string
    dateCreation?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
  }

  export type AuteurWhereInput = {
    AND?: AuteurWhereInput | AuteurWhereInput[]
    OR?: AuteurWhereInput[]
    NOT?: AuteurWhereInput | AuteurWhereInput[]
    id?: IntFilter<"Auteur"> | number
    nom?: StringFilter<"Auteur"> | string
    biographie?: StringNullableFilter<"Auteur"> | string | null
    livres?: LivreListRelationFilter
  }

  export type AuteurOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    biographie?: SortOrderInput | SortOrder
    livres?: LivreOrderByRelationAggregateInput
  }

  export type AuteurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuteurWhereInput | AuteurWhereInput[]
    OR?: AuteurWhereInput[]
    NOT?: AuteurWhereInput | AuteurWhereInput[]
    nom?: StringFilter<"Auteur"> | string
    biographie?: StringNullableFilter<"Auteur"> | string | null
    livres?: LivreListRelationFilter
  }, "id">

  export type AuteurOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    biographie?: SortOrderInput | SortOrder
    _count?: AuteurCountOrderByAggregateInput
    _avg?: AuteurAvgOrderByAggregateInput
    _max?: AuteurMaxOrderByAggregateInput
    _min?: AuteurMinOrderByAggregateInput
    _sum?: AuteurSumOrderByAggregateInput
  }

  export type AuteurScalarWhereWithAggregatesInput = {
    AND?: AuteurScalarWhereWithAggregatesInput | AuteurScalarWhereWithAggregatesInput[]
    OR?: AuteurScalarWhereWithAggregatesInput[]
    NOT?: AuteurScalarWhereWithAggregatesInput | AuteurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Auteur"> | number
    nom?: StringWithAggregatesFilter<"Auteur"> | string
    biographie?: StringNullableWithAggregatesFilter<"Auteur"> | string | null
  }

  export type LivreWhereInput = {
    AND?: LivreWhereInput | LivreWhereInput[]
    OR?: LivreWhereInput[]
    NOT?: LivreWhereInput | LivreWhereInput[]
    id?: IntFilter<"Livre"> | number
    titre?: StringFilter<"Livre"> | string
    description?: StringNullableFilter<"Livre"> | string | null
    disponible?: BoolFilter<"Livre"> | boolean
    dateCreation?: DateTimeFilter<"Livre"> | Date | string
    auteurId?: IntFilter<"Livre"> | number
    auteur?: XOR<AuteurScalarRelationFilter, AuteurWhereInput>
    categories?: LivreCategorieListRelationFilter
    emprunts?: EmpruntListRelationFilter
    avis?: AvisListRelationFilter
  }

  export type LivreOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrderInput | SortOrder
    disponible?: SortOrder
    dateCreation?: SortOrder
    auteurId?: SortOrder
    auteur?: AuteurOrderByWithRelationInput
    categories?: LivreCategorieOrderByRelationAggregateInput
    emprunts?: EmpruntOrderByRelationAggregateInput
    avis?: AvisOrderByRelationAggregateInput
  }

  export type LivreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LivreWhereInput | LivreWhereInput[]
    OR?: LivreWhereInput[]
    NOT?: LivreWhereInput | LivreWhereInput[]
    titre?: StringFilter<"Livre"> | string
    description?: StringNullableFilter<"Livre"> | string | null
    disponible?: BoolFilter<"Livre"> | boolean
    dateCreation?: DateTimeFilter<"Livre"> | Date | string
    auteurId?: IntFilter<"Livre"> | number
    auteur?: XOR<AuteurScalarRelationFilter, AuteurWhereInput>
    categories?: LivreCategorieListRelationFilter
    emprunts?: EmpruntListRelationFilter
    avis?: AvisListRelationFilter
  }, "id">

  export type LivreOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrderInput | SortOrder
    disponible?: SortOrder
    dateCreation?: SortOrder
    auteurId?: SortOrder
    _count?: LivreCountOrderByAggregateInput
    _avg?: LivreAvgOrderByAggregateInput
    _max?: LivreMaxOrderByAggregateInput
    _min?: LivreMinOrderByAggregateInput
    _sum?: LivreSumOrderByAggregateInput
  }

  export type LivreScalarWhereWithAggregatesInput = {
    AND?: LivreScalarWhereWithAggregatesInput | LivreScalarWhereWithAggregatesInput[]
    OR?: LivreScalarWhereWithAggregatesInput[]
    NOT?: LivreScalarWhereWithAggregatesInput | LivreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Livre"> | number
    titre?: StringWithAggregatesFilter<"Livre"> | string
    description?: StringNullableWithAggregatesFilter<"Livre"> | string | null
    disponible?: BoolWithAggregatesFilter<"Livre"> | boolean
    dateCreation?: DateTimeWithAggregatesFilter<"Livre"> | Date | string
    auteurId?: IntWithAggregatesFilter<"Livre"> | number
  }

  export type CategorieWhereInput = {
    AND?: CategorieWhereInput | CategorieWhereInput[]
    OR?: CategorieWhereInput[]
    NOT?: CategorieWhereInput | CategorieWhereInput[]
    id?: IntFilter<"Categorie"> | number
    nom?: StringFilter<"Categorie"> | string
    livres?: LivreCategorieListRelationFilter
  }

  export type CategorieOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    livres?: LivreCategorieOrderByRelationAggregateInput
  }

  export type CategorieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nom?: string
    AND?: CategorieWhereInput | CategorieWhereInput[]
    OR?: CategorieWhereInput[]
    NOT?: CategorieWhereInput | CategorieWhereInput[]
    livres?: LivreCategorieListRelationFilter
  }, "id" | "nom">

  export type CategorieOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    _count?: CategorieCountOrderByAggregateInput
    _avg?: CategorieAvgOrderByAggregateInput
    _max?: CategorieMaxOrderByAggregateInput
    _min?: CategorieMinOrderByAggregateInput
    _sum?: CategorieSumOrderByAggregateInput
  }

  export type CategorieScalarWhereWithAggregatesInput = {
    AND?: CategorieScalarWhereWithAggregatesInput | CategorieScalarWhereWithAggregatesInput[]
    OR?: CategorieScalarWhereWithAggregatesInput[]
    NOT?: CategorieScalarWhereWithAggregatesInput | CategorieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categorie"> | number
    nom?: StringWithAggregatesFilter<"Categorie"> | string
  }

  export type LivreCategorieWhereInput = {
    AND?: LivreCategorieWhereInput | LivreCategorieWhereInput[]
    OR?: LivreCategorieWhereInput[]
    NOT?: LivreCategorieWhereInput | LivreCategorieWhereInput[]
    livreId?: IntFilter<"LivreCategorie"> | number
    categorieId?: IntFilter<"LivreCategorie"> | number
    livre?: XOR<LivreScalarRelationFilter, LivreWhereInput>
    categorie?: XOR<CategorieScalarRelationFilter, CategorieWhereInput>
  }

  export type LivreCategorieOrderByWithRelationInput = {
    livreId?: SortOrder
    categorieId?: SortOrder
    livre?: LivreOrderByWithRelationInput
    categorie?: CategorieOrderByWithRelationInput
  }

  export type LivreCategorieWhereUniqueInput = Prisma.AtLeast<{
    livreId_categorieId?: LivreCategorieLivreIdCategorieIdCompoundUniqueInput
    AND?: LivreCategorieWhereInput | LivreCategorieWhereInput[]
    OR?: LivreCategorieWhereInput[]
    NOT?: LivreCategorieWhereInput | LivreCategorieWhereInput[]
    livreId?: IntFilter<"LivreCategorie"> | number
    categorieId?: IntFilter<"LivreCategorie"> | number
    livre?: XOR<LivreScalarRelationFilter, LivreWhereInput>
    categorie?: XOR<CategorieScalarRelationFilter, CategorieWhereInput>
  }, "livreId_categorieId">

  export type LivreCategorieOrderByWithAggregationInput = {
    livreId?: SortOrder
    categorieId?: SortOrder
    _count?: LivreCategorieCountOrderByAggregateInput
    _avg?: LivreCategorieAvgOrderByAggregateInput
    _max?: LivreCategorieMaxOrderByAggregateInput
    _min?: LivreCategorieMinOrderByAggregateInput
    _sum?: LivreCategorieSumOrderByAggregateInput
  }

  export type LivreCategorieScalarWhereWithAggregatesInput = {
    AND?: LivreCategorieScalarWhereWithAggregatesInput | LivreCategorieScalarWhereWithAggregatesInput[]
    OR?: LivreCategorieScalarWhereWithAggregatesInput[]
    NOT?: LivreCategorieScalarWhereWithAggregatesInput | LivreCategorieScalarWhereWithAggregatesInput[]
    livreId?: IntWithAggregatesFilter<"LivreCategorie"> | number
    categorieId?: IntWithAggregatesFilter<"LivreCategorie"> | number
  }

  export type EmpruntWhereInput = {
    AND?: EmpruntWhereInput | EmpruntWhereInput[]
    OR?: EmpruntWhereInput[]
    NOT?: EmpruntWhereInput | EmpruntWhereInput[]
    id?: IntFilter<"Emprunt"> | number
    dateEmprunt?: DateTimeFilter<"Emprunt"> | Date | string
    dateRetour?: DateTimeNullableFilter<"Emprunt"> | Date | string | null
    statut?: EnumStatutEmpruntFilter<"Emprunt"> | $Enums.StatutEmprunt
    utilisateurId?: IntFilter<"Emprunt"> | number
    livreId?: IntFilter<"Emprunt"> | number
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    livre?: XOR<LivreScalarRelationFilter, LivreWhereInput>
  }

  export type EmpruntOrderByWithRelationInput = {
    id?: SortOrder
    dateEmprunt?: SortOrder
    dateRetour?: SortOrderInput | SortOrder
    statut?: SortOrder
    utilisateurId?: SortOrder
    livreId?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    livre?: LivreOrderByWithRelationInput
  }

  export type EmpruntWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmpruntWhereInput | EmpruntWhereInput[]
    OR?: EmpruntWhereInput[]
    NOT?: EmpruntWhereInput | EmpruntWhereInput[]
    dateEmprunt?: DateTimeFilter<"Emprunt"> | Date | string
    dateRetour?: DateTimeNullableFilter<"Emprunt"> | Date | string | null
    statut?: EnumStatutEmpruntFilter<"Emprunt"> | $Enums.StatutEmprunt
    utilisateurId?: IntFilter<"Emprunt"> | number
    livreId?: IntFilter<"Emprunt"> | number
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    livre?: XOR<LivreScalarRelationFilter, LivreWhereInput>
  }, "id">

  export type EmpruntOrderByWithAggregationInput = {
    id?: SortOrder
    dateEmprunt?: SortOrder
    dateRetour?: SortOrderInput | SortOrder
    statut?: SortOrder
    utilisateurId?: SortOrder
    livreId?: SortOrder
    _count?: EmpruntCountOrderByAggregateInput
    _avg?: EmpruntAvgOrderByAggregateInput
    _max?: EmpruntMaxOrderByAggregateInput
    _min?: EmpruntMinOrderByAggregateInput
    _sum?: EmpruntSumOrderByAggregateInput
  }

  export type EmpruntScalarWhereWithAggregatesInput = {
    AND?: EmpruntScalarWhereWithAggregatesInput | EmpruntScalarWhereWithAggregatesInput[]
    OR?: EmpruntScalarWhereWithAggregatesInput[]
    NOT?: EmpruntScalarWhereWithAggregatesInput | EmpruntScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Emprunt"> | number
    dateEmprunt?: DateTimeWithAggregatesFilter<"Emprunt"> | Date | string
    dateRetour?: DateTimeNullableWithAggregatesFilter<"Emprunt"> | Date | string | null
    statut?: EnumStatutEmpruntWithAggregatesFilter<"Emprunt"> | $Enums.StatutEmprunt
    utilisateurId?: IntWithAggregatesFilter<"Emprunt"> | number
    livreId?: IntWithAggregatesFilter<"Emprunt"> | number
  }

  export type AvisWhereInput = {
    AND?: AvisWhereInput | AvisWhereInput[]
    OR?: AvisWhereInput[]
    NOT?: AvisWhereInput | AvisWhereInput[]
    id?: IntFilter<"Avis"> | number
    note?: IntFilter<"Avis"> | number
    commentaire?: StringNullableFilter<"Avis"> | string | null
    dateCreation?: DateTimeFilter<"Avis"> | Date | string
    utilisateurId?: IntFilter<"Avis"> | number
    livreId?: IntFilter<"Avis"> | number
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    livre?: XOR<LivreScalarRelationFilter, LivreWhereInput>
  }

  export type AvisOrderByWithRelationInput = {
    id?: SortOrder
    note?: SortOrder
    commentaire?: SortOrderInput | SortOrder
    dateCreation?: SortOrder
    utilisateurId?: SortOrder
    livreId?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    livre?: LivreOrderByWithRelationInput
  }

  export type AvisWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AvisWhereInput | AvisWhereInput[]
    OR?: AvisWhereInput[]
    NOT?: AvisWhereInput | AvisWhereInput[]
    note?: IntFilter<"Avis"> | number
    commentaire?: StringNullableFilter<"Avis"> | string | null
    dateCreation?: DateTimeFilter<"Avis"> | Date | string
    utilisateurId?: IntFilter<"Avis"> | number
    livreId?: IntFilter<"Avis"> | number
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    livre?: XOR<LivreScalarRelationFilter, LivreWhereInput>
  }, "id">

  export type AvisOrderByWithAggregationInput = {
    id?: SortOrder
    note?: SortOrder
    commentaire?: SortOrderInput | SortOrder
    dateCreation?: SortOrder
    utilisateurId?: SortOrder
    livreId?: SortOrder
    _count?: AvisCountOrderByAggregateInput
    _avg?: AvisAvgOrderByAggregateInput
    _max?: AvisMaxOrderByAggregateInput
    _min?: AvisMinOrderByAggregateInput
    _sum?: AvisSumOrderByAggregateInput
  }

  export type AvisScalarWhereWithAggregatesInput = {
    AND?: AvisScalarWhereWithAggregatesInput | AvisScalarWhereWithAggregatesInput[]
    OR?: AvisScalarWhereWithAggregatesInput[]
    NOT?: AvisScalarWhereWithAggregatesInput | AvisScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Avis"> | number
    note?: IntWithAggregatesFilter<"Avis"> | number
    commentaire?: StringNullableWithAggregatesFilter<"Avis"> | string | null
    dateCreation?: DateTimeWithAggregatesFilter<"Avis"> | Date | string
    utilisateurId?: IntWithAggregatesFilter<"Avis"> | number
    livreId?: IntWithAggregatesFilter<"Avis"> | number
  }

  export type UtilisateurCreateInput = {
    nom: string
    email: string
    dateCreation?: Date | string
    emprunts?: EmpruntCreateNestedManyWithoutUtilisateurInput
    avis?: AvisCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateInput = {
    id?: number
    nom: string
    email: string
    dateCreation?: Date | string
    emprunts?: EmpruntUncheckedCreateNestedManyWithoutUtilisateurInput
    avis?: AvisUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    emprunts?: EmpruntUpdateManyWithoutUtilisateurNestedInput
    avis?: AvisUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    emprunts?: EmpruntUncheckedUpdateManyWithoutUtilisateurNestedInput
    avis?: AvisUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurCreateManyInput = {
    id?: number
    nom: string
    email: string
    dateCreation?: Date | string
  }

  export type UtilisateurUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuteurCreateInput = {
    nom: string
    biographie?: string | null
    livres?: LivreCreateNestedManyWithoutAuteurInput
  }

  export type AuteurUncheckedCreateInput = {
    id?: number
    nom: string
    biographie?: string | null
    livres?: LivreUncheckedCreateNestedManyWithoutAuteurInput
  }

  export type AuteurUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    biographie?: NullableStringFieldUpdateOperationsInput | string | null
    livres?: LivreUpdateManyWithoutAuteurNestedInput
  }

  export type AuteurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    biographie?: NullableStringFieldUpdateOperationsInput | string | null
    livres?: LivreUncheckedUpdateManyWithoutAuteurNestedInput
  }

  export type AuteurCreateManyInput = {
    id?: number
    nom: string
    biographie?: string | null
  }

  export type AuteurUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    biographie?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuteurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    biographie?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LivreCreateInput = {
    titre: string
    description?: string | null
    disponible?: boolean
    dateCreation?: Date | string
    auteur: AuteurCreateNestedOneWithoutLivresInput
    categories?: LivreCategorieCreateNestedManyWithoutLivreInput
    emprunts?: EmpruntCreateNestedManyWithoutLivreInput
    avis?: AvisCreateNestedManyWithoutLivreInput
  }

  export type LivreUncheckedCreateInput = {
    id?: number
    titre: string
    description?: string | null
    disponible?: boolean
    dateCreation?: Date | string
    auteurId: number
    categories?: LivreCategorieUncheckedCreateNestedManyWithoutLivreInput
    emprunts?: EmpruntUncheckedCreateNestedManyWithoutLivreInput
    avis?: AvisUncheckedCreateNestedManyWithoutLivreInput
  }

  export type LivreUpdateInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: AuteurUpdateOneRequiredWithoutLivresNestedInput
    categories?: LivreCategorieUpdateManyWithoutLivreNestedInput
    emprunts?: EmpruntUpdateManyWithoutLivreNestedInput
    avis?: AvisUpdateManyWithoutLivreNestedInput
  }

  export type LivreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: IntFieldUpdateOperationsInput | number
    categories?: LivreCategorieUncheckedUpdateManyWithoutLivreNestedInput
    emprunts?: EmpruntUncheckedUpdateManyWithoutLivreNestedInput
    avis?: AvisUncheckedUpdateManyWithoutLivreNestedInput
  }

  export type LivreCreateManyInput = {
    id?: number
    titre: string
    description?: string | null
    disponible?: boolean
    dateCreation?: Date | string
    auteurId: number
  }

  export type LivreUpdateManyMutationInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LivreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: IntFieldUpdateOperationsInput | number
  }

  export type CategorieCreateInput = {
    nom: string
    livres?: LivreCategorieCreateNestedManyWithoutCategorieInput
  }

  export type CategorieUncheckedCreateInput = {
    id?: number
    nom: string
    livres?: LivreCategorieUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type CategorieUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    livres?: LivreCategorieUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    livres?: LivreCategorieUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieCreateManyInput = {
    id?: number
    nom: string
  }

  export type CategorieUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type CategorieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type LivreCategorieCreateInput = {
    livre: LivreCreateNestedOneWithoutCategoriesInput
    categorie: CategorieCreateNestedOneWithoutLivresInput
  }

  export type LivreCategorieUncheckedCreateInput = {
    livreId: number
    categorieId: number
  }

  export type LivreCategorieUpdateInput = {
    livre?: LivreUpdateOneRequiredWithoutCategoriesNestedInput
    categorie?: CategorieUpdateOneRequiredWithoutLivresNestedInput
  }

  export type LivreCategorieUncheckedUpdateInput = {
    livreId?: IntFieldUpdateOperationsInput | number
    categorieId?: IntFieldUpdateOperationsInput | number
  }

  export type LivreCategorieCreateManyInput = {
    livreId: number
    categorieId: number
  }

  export type LivreCategorieUpdateManyMutationInput = {

  }

  export type LivreCategorieUncheckedUpdateManyInput = {
    livreId?: IntFieldUpdateOperationsInput | number
    categorieId?: IntFieldUpdateOperationsInput | number
  }

  export type EmpruntCreateInput = {
    dateEmprunt?: Date | string
    dateRetour?: Date | string | null
    statut?: $Enums.StatutEmprunt
    utilisateur: UtilisateurCreateNestedOneWithoutEmpruntsInput
    livre: LivreCreateNestedOneWithoutEmpruntsInput
  }

  export type EmpruntUncheckedCreateInput = {
    id?: number
    dateEmprunt?: Date | string
    dateRetour?: Date | string | null
    statut?: $Enums.StatutEmprunt
    utilisateurId: number
    livreId: number
  }

  export type EmpruntUpdateInput = {
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetour?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutEmpruntFieldUpdateOperationsInput | $Enums.StatutEmprunt
    utilisateur?: UtilisateurUpdateOneRequiredWithoutEmpruntsNestedInput
    livre?: LivreUpdateOneRequiredWithoutEmpruntsNestedInput
  }

  export type EmpruntUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetour?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutEmpruntFieldUpdateOperationsInput | $Enums.StatutEmprunt
    utilisateurId?: IntFieldUpdateOperationsInput | number
    livreId?: IntFieldUpdateOperationsInput | number
  }

  export type EmpruntCreateManyInput = {
    id?: number
    dateEmprunt?: Date | string
    dateRetour?: Date | string | null
    statut?: $Enums.StatutEmprunt
    utilisateurId: number
    livreId: number
  }

  export type EmpruntUpdateManyMutationInput = {
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetour?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutEmpruntFieldUpdateOperationsInput | $Enums.StatutEmprunt
  }

  export type EmpruntUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetour?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutEmpruntFieldUpdateOperationsInput | $Enums.StatutEmprunt
    utilisateurId?: IntFieldUpdateOperationsInput | number
    livreId?: IntFieldUpdateOperationsInput | number
  }

  export type AvisCreateInput = {
    note: number
    commentaire?: string | null
    dateCreation?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutAvisInput
    livre: LivreCreateNestedOneWithoutAvisInput
  }

  export type AvisUncheckedCreateInput = {
    id?: number
    note: number
    commentaire?: string | null
    dateCreation?: Date | string
    utilisateurId: number
    livreId: number
  }

  export type AvisUpdateInput = {
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutAvisNestedInput
    livre?: LivreUpdateOneRequiredWithoutAvisNestedInput
  }

  export type AvisUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurId?: IntFieldUpdateOperationsInput | number
    livreId?: IntFieldUpdateOperationsInput | number
  }

  export type AvisCreateManyInput = {
    id?: number
    note: number
    commentaire?: string | null
    dateCreation?: Date | string
    utilisateurId: number
    livreId: number
  }

  export type AvisUpdateManyMutationInput = {
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvisUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurId?: IntFieldUpdateOperationsInput | number
    livreId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmpruntListRelationFilter = {
    every?: EmpruntWhereInput
    some?: EmpruntWhereInput
    none?: EmpruntWhereInput
  }

  export type AvisListRelationFilter = {
    every?: AvisWhereInput
    some?: AvisWhereInput
    none?: AvisWhereInput
  }

  export type EmpruntOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    dateCreation?: SortOrder
  }

  export type UtilisateurAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UtilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    dateCreation?: SortOrder
  }

  export type UtilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    dateCreation?: SortOrder
  }

  export type UtilisateurSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type LivreListRelationFilter = {
    every?: LivreWhereInput
    some?: LivreWhereInput
    none?: LivreWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LivreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuteurCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    biographie?: SortOrder
  }

  export type AuteurAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuteurMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    biographie?: SortOrder
  }

  export type AuteurMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    biographie?: SortOrder
  }

  export type AuteurSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AuteurScalarRelationFilter = {
    is?: AuteurWhereInput
    isNot?: AuteurWhereInput
  }

  export type LivreCategorieListRelationFilter = {
    every?: LivreCategorieWhereInput
    some?: LivreCategorieWhereInput
    none?: LivreCategorieWhereInput
  }

  export type LivreCategorieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LivreCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    disponible?: SortOrder
    dateCreation?: SortOrder
    auteurId?: SortOrder
  }

  export type LivreAvgOrderByAggregateInput = {
    id?: SortOrder
    auteurId?: SortOrder
  }

  export type LivreMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    disponible?: SortOrder
    dateCreation?: SortOrder
    auteurId?: SortOrder
  }

  export type LivreMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    disponible?: SortOrder
    dateCreation?: SortOrder
    auteurId?: SortOrder
  }

  export type LivreSumOrderByAggregateInput = {
    id?: SortOrder
    auteurId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CategorieCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
  }

  export type CategorieAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategorieMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
  }

  export type CategorieMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
  }

  export type CategorieSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LivreScalarRelationFilter = {
    is?: LivreWhereInput
    isNot?: LivreWhereInput
  }

  export type CategorieScalarRelationFilter = {
    is?: CategorieWhereInput
    isNot?: CategorieWhereInput
  }

  export type LivreCategorieLivreIdCategorieIdCompoundUniqueInput = {
    livreId: number
    categorieId: number
  }

  export type LivreCategorieCountOrderByAggregateInput = {
    livreId?: SortOrder
    categorieId?: SortOrder
  }

  export type LivreCategorieAvgOrderByAggregateInput = {
    livreId?: SortOrder
    categorieId?: SortOrder
  }

  export type LivreCategorieMaxOrderByAggregateInput = {
    livreId?: SortOrder
    categorieId?: SortOrder
  }

  export type LivreCategorieMinOrderByAggregateInput = {
    livreId?: SortOrder
    categorieId?: SortOrder
  }

  export type LivreCategorieSumOrderByAggregateInput = {
    livreId?: SortOrder
    categorieId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumStatutEmpruntFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutEmprunt | EnumStatutEmpruntFieldRefInput<$PrismaModel>
    in?: $Enums.StatutEmprunt[]
    notIn?: $Enums.StatutEmprunt[]
    not?: NestedEnumStatutEmpruntFilter<$PrismaModel> | $Enums.StatutEmprunt
  }

  export type UtilisateurScalarRelationFilter = {
    is?: UtilisateurWhereInput
    isNot?: UtilisateurWhereInput
  }

  export type EmpruntCountOrderByAggregateInput = {
    id?: SortOrder
    dateEmprunt?: SortOrder
    dateRetour?: SortOrder
    statut?: SortOrder
    utilisateurId?: SortOrder
    livreId?: SortOrder
  }

  export type EmpruntAvgOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    livreId?: SortOrder
  }

  export type EmpruntMaxOrderByAggregateInput = {
    id?: SortOrder
    dateEmprunt?: SortOrder
    dateRetour?: SortOrder
    statut?: SortOrder
    utilisateurId?: SortOrder
    livreId?: SortOrder
  }

  export type EmpruntMinOrderByAggregateInput = {
    id?: SortOrder
    dateEmprunt?: SortOrder
    dateRetour?: SortOrder
    statut?: SortOrder
    utilisateurId?: SortOrder
    livreId?: SortOrder
  }

  export type EmpruntSumOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    livreId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStatutEmpruntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutEmprunt | EnumStatutEmpruntFieldRefInput<$PrismaModel>
    in?: $Enums.StatutEmprunt[]
    notIn?: $Enums.StatutEmprunt[]
    not?: NestedEnumStatutEmpruntWithAggregatesFilter<$PrismaModel> | $Enums.StatutEmprunt
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutEmpruntFilter<$PrismaModel>
    _max?: NestedEnumStatutEmpruntFilter<$PrismaModel>
  }

  export type AvisCountOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    commentaire?: SortOrder
    dateCreation?: SortOrder
    utilisateurId?: SortOrder
    livreId?: SortOrder
  }

  export type AvisAvgOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    utilisateurId?: SortOrder
    livreId?: SortOrder
  }

  export type AvisMaxOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    commentaire?: SortOrder
    dateCreation?: SortOrder
    utilisateurId?: SortOrder
    livreId?: SortOrder
  }

  export type AvisMinOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    commentaire?: SortOrder
    dateCreation?: SortOrder
    utilisateurId?: SortOrder
    livreId?: SortOrder
  }

  export type AvisSumOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    utilisateurId?: SortOrder
    livreId?: SortOrder
  }

  export type EmpruntCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<EmpruntCreateWithoutUtilisateurInput, EmpruntUncheckedCreateWithoutUtilisateurInput> | EmpruntCreateWithoutUtilisateurInput[] | EmpruntUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: EmpruntCreateOrConnectWithoutUtilisateurInput | EmpruntCreateOrConnectWithoutUtilisateurInput[]
    createMany?: EmpruntCreateManyUtilisateurInputEnvelope
    connect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
  }

  export type AvisCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<AvisCreateWithoutUtilisateurInput, AvisUncheckedCreateWithoutUtilisateurInput> | AvisCreateWithoutUtilisateurInput[] | AvisUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutUtilisateurInput | AvisCreateOrConnectWithoutUtilisateurInput[]
    createMany?: AvisCreateManyUtilisateurInputEnvelope
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
  }

  export type EmpruntUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<EmpruntCreateWithoutUtilisateurInput, EmpruntUncheckedCreateWithoutUtilisateurInput> | EmpruntCreateWithoutUtilisateurInput[] | EmpruntUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: EmpruntCreateOrConnectWithoutUtilisateurInput | EmpruntCreateOrConnectWithoutUtilisateurInput[]
    createMany?: EmpruntCreateManyUtilisateurInputEnvelope
    connect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
  }

  export type AvisUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<AvisCreateWithoutUtilisateurInput, AvisUncheckedCreateWithoutUtilisateurInput> | AvisCreateWithoutUtilisateurInput[] | AvisUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutUtilisateurInput | AvisCreateOrConnectWithoutUtilisateurInput[]
    createMany?: AvisCreateManyUtilisateurInputEnvelope
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmpruntUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<EmpruntCreateWithoutUtilisateurInput, EmpruntUncheckedCreateWithoutUtilisateurInput> | EmpruntCreateWithoutUtilisateurInput[] | EmpruntUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: EmpruntCreateOrConnectWithoutUtilisateurInput | EmpruntCreateOrConnectWithoutUtilisateurInput[]
    upsert?: EmpruntUpsertWithWhereUniqueWithoutUtilisateurInput | EmpruntUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: EmpruntCreateManyUtilisateurInputEnvelope
    set?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    disconnect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    delete?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    connect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    update?: EmpruntUpdateWithWhereUniqueWithoutUtilisateurInput | EmpruntUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: EmpruntUpdateManyWithWhereWithoutUtilisateurInput | EmpruntUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: EmpruntScalarWhereInput | EmpruntScalarWhereInput[]
  }

  export type AvisUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<AvisCreateWithoutUtilisateurInput, AvisUncheckedCreateWithoutUtilisateurInput> | AvisCreateWithoutUtilisateurInput[] | AvisUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutUtilisateurInput | AvisCreateOrConnectWithoutUtilisateurInput[]
    upsert?: AvisUpsertWithWhereUniqueWithoutUtilisateurInput | AvisUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: AvisCreateManyUtilisateurInputEnvelope
    set?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    disconnect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    delete?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    update?: AvisUpdateWithWhereUniqueWithoutUtilisateurInput | AvisUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: AvisUpdateManyWithWhereWithoutUtilisateurInput | AvisUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: AvisScalarWhereInput | AvisScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmpruntUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<EmpruntCreateWithoutUtilisateurInput, EmpruntUncheckedCreateWithoutUtilisateurInput> | EmpruntCreateWithoutUtilisateurInput[] | EmpruntUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: EmpruntCreateOrConnectWithoutUtilisateurInput | EmpruntCreateOrConnectWithoutUtilisateurInput[]
    upsert?: EmpruntUpsertWithWhereUniqueWithoutUtilisateurInput | EmpruntUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: EmpruntCreateManyUtilisateurInputEnvelope
    set?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    disconnect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    delete?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    connect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    update?: EmpruntUpdateWithWhereUniqueWithoutUtilisateurInput | EmpruntUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: EmpruntUpdateManyWithWhereWithoutUtilisateurInput | EmpruntUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: EmpruntScalarWhereInput | EmpruntScalarWhereInput[]
  }

  export type AvisUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<AvisCreateWithoutUtilisateurInput, AvisUncheckedCreateWithoutUtilisateurInput> | AvisCreateWithoutUtilisateurInput[] | AvisUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutUtilisateurInput | AvisCreateOrConnectWithoutUtilisateurInput[]
    upsert?: AvisUpsertWithWhereUniqueWithoutUtilisateurInput | AvisUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: AvisCreateManyUtilisateurInputEnvelope
    set?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    disconnect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    delete?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    update?: AvisUpdateWithWhereUniqueWithoutUtilisateurInput | AvisUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: AvisUpdateManyWithWhereWithoutUtilisateurInput | AvisUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: AvisScalarWhereInput | AvisScalarWhereInput[]
  }

  export type LivreCreateNestedManyWithoutAuteurInput = {
    create?: XOR<LivreCreateWithoutAuteurInput, LivreUncheckedCreateWithoutAuteurInput> | LivreCreateWithoutAuteurInput[] | LivreUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: LivreCreateOrConnectWithoutAuteurInput | LivreCreateOrConnectWithoutAuteurInput[]
    createMany?: LivreCreateManyAuteurInputEnvelope
    connect?: LivreWhereUniqueInput | LivreWhereUniqueInput[]
  }

  export type LivreUncheckedCreateNestedManyWithoutAuteurInput = {
    create?: XOR<LivreCreateWithoutAuteurInput, LivreUncheckedCreateWithoutAuteurInput> | LivreCreateWithoutAuteurInput[] | LivreUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: LivreCreateOrConnectWithoutAuteurInput | LivreCreateOrConnectWithoutAuteurInput[]
    createMany?: LivreCreateManyAuteurInputEnvelope
    connect?: LivreWhereUniqueInput | LivreWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LivreUpdateManyWithoutAuteurNestedInput = {
    create?: XOR<LivreCreateWithoutAuteurInput, LivreUncheckedCreateWithoutAuteurInput> | LivreCreateWithoutAuteurInput[] | LivreUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: LivreCreateOrConnectWithoutAuteurInput | LivreCreateOrConnectWithoutAuteurInput[]
    upsert?: LivreUpsertWithWhereUniqueWithoutAuteurInput | LivreUpsertWithWhereUniqueWithoutAuteurInput[]
    createMany?: LivreCreateManyAuteurInputEnvelope
    set?: LivreWhereUniqueInput | LivreWhereUniqueInput[]
    disconnect?: LivreWhereUniqueInput | LivreWhereUniqueInput[]
    delete?: LivreWhereUniqueInput | LivreWhereUniqueInput[]
    connect?: LivreWhereUniqueInput | LivreWhereUniqueInput[]
    update?: LivreUpdateWithWhereUniqueWithoutAuteurInput | LivreUpdateWithWhereUniqueWithoutAuteurInput[]
    updateMany?: LivreUpdateManyWithWhereWithoutAuteurInput | LivreUpdateManyWithWhereWithoutAuteurInput[]
    deleteMany?: LivreScalarWhereInput | LivreScalarWhereInput[]
  }

  export type LivreUncheckedUpdateManyWithoutAuteurNestedInput = {
    create?: XOR<LivreCreateWithoutAuteurInput, LivreUncheckedCreateWithoutAuteurInput> | LivreCreateWithoutAuteurInput[] | LivreUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: LivreCreateOrConnectWithoutAuteurInput | LivreCreateOrConnectWithoutAuteurInput[]
    upsert?: LivreUpsertWithWhereUniqueWithoutAuteurInput | LivreUpsertWithWhereUniqueWithoutAuteurInput[]
    createMany?: LivreCreateManyAuteurInputEnvelope
    set?: LivreWhereUniqueInput | LivreWhereUniqueInput[]
    disconnect?: LivreWhereUniqueInput | LivreWhereUniqueInput[]
    delete?: LivreWhereUniqueInput | LivreWhereUniqueInput[]
    connect?: LivreWhereUniqueInput | LivreWhereUniqueInput[]
    update?: LivreUpdateWithWhereUniqueWithoutAuteurInput | LivreUpdateWithWhereUniqueWithoutAuteurInput[]
    updateMany?: LivreUpdateManyWithWhereWithoutAuteurInput | LivreUpdateManyWithWhereWithoutAuteurInput[]
    deleteMany?: LivreScalarWhereInput | LivreScalarWhereInput[]
  }

  export type AuteurCreateNestedOneWithoutLivresInput = {
    create?: XOR<AuteurCreateWithoutLivresInput, AuteurUncheckedCreateWithoutLivresInput>
    connectOrCreate?: AuteurCreateOrConnectWithoutLivresInput
    connect?: AuteurWhereUniqueInput
  }

  export type LivreCategorieCreateNestedManyWithoutLivreInput = {
    create?: XOR<LivreCategorieCreateWithoutLivreInput, LivreCategorieUncheckedCreateWithoutLivreInput> | LivreCategorieCreateWithoutLivreInput[] | LivreCategorieUncheckedCreateWithoutLivreInput[]
    connectOrCreate?: LivreCategorieCreateOrConnectWithoutLivreInput | LivreCategorieCreateOrConnectWithoutLivreInput[]
    createMany?: LivreCategorieCreateManyLivreInputEnvelope
    connect?: LivreCategorieWhereUniqueInput | LivreCategorieWhereUniqueInput[]
  }

  export type EmpruntCreateNestedManyWithoutLivreInput = {
    create?: XOR<EmpruntCreateWithoutLivreInput, EmpruntUncheckedCreateWithoutLivreInput> | EmpruntCreateWithoutLivreInput[] | EmpruntUncheckedCreateWithoutLivreInput[]
    connectOrCreate?: EmpruntCreateOrConnectWithoutLivreInput | EmpruntCreateOrConnectWithoutLivreInput[]
    createMany?: EmpruntCreateManyLivreInputEnvelope
    connect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
  }

  export type AvisCreateNestedManyWithoutLivreInput = {
    create?: XOR<AvisCreateWithoutLivreInput, AvisUncheckedCreateWithoutLivreInput> | AvisCreateWithoutLivreInput[] | AvisUncheckedCreateWithoutLivreInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutLivreInput | AvisCreateOrConnectWithoutLivreInput[]
    createMany?: AvisCreateManyLivreInputEnvelope
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
  }

  export type LivreCategorieUncheckedCreateNestedManyWithoutLivreInput = {
    create?: XOR<LivreCategorieCreateWithoutLivreInput, LivreCategorieUncheckedCreateWithoutLivreInput> | LivreCategorieCreateWithoutLivreInput[] | LivreCategorieUncheckedCreateWithoutLivreInput[]
    connectOrCreate?: LivreCategorieCreateOrConnectWithoutLivreInput | LivreCategorieCreateOrConnectWithoutLivreInput[]
    createMany?: LivreCategorieCreateManyLivreInputEnvelope
    connect?: LivreCategorieWhereUniqueInput | LivreCategorieWhereUniqueInput[]
  }

  export type EmpruntUncheckedCreateNestedManyWithoutLivreInput = {
    create?: XOR<EmpruntCreateWithoutLivreInput, EmpruntUncheckedCreateWithoutLivreInput> | EmpruntCreateWithoutLivreInput[] | EmpruntUncheckedCreateWithoutLivreInput[]
    connectOrCreate?: EmpruntCreateOrConnectWithoutLivreInput | EmpruntCreateOrConnectWithoutLivreInput[]
    createMany?: EmpruntCreateManyLivreInputEnvelope
    connect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
  }

  export type AvisUncheckedCreateNestedManyWithoutLivreInput = {
    create?: XOR<AvisCreateWithoutLivreInput, AvisUncheckedCreateWithoutLivreInput> | AvisCreateWithoutLivreInput[] | AvisUncheckedCreateWithoutLivreInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutLivreInput | AvisCreateOrConnectWithoutLivreInput[]
    createMany?: AvisCreateManyLivreInputEnvelope
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AuteurUpdateOneRequiredWithoutLivresNestedInput = {
    create?: XOR<AuteurCreateWithoutLivresInput, AuteurUncheckedCreateWithoutLivresInput>
    connectOrCreate?: AuteurCreateOrConnectWithoutLivresInput
    upsert?: AuteurUpsertWithoutLivresInput
    connect?: AuteurWhereUniqueInput
    update?: XOR<XOR<AuteurUpdateToOneWithWhereWithoutLivresInput, AuteurUpdateWithoutLivresInput>, AuteurUncheckedUpdateWithoutLivresInput>
  }

  export type LivreCategorieUpdateManyWithoutLivreNestedInput = {
    create?: XOR<LivreCategorieCreateWithoutLivreInput, LivreCategorieUncheckedCreateWithoutLivreInput> | LivreCategorieCreateWithoutLivreInput[] | LivreCategorieUncheckedCreateWithoutLivreInput[]
    connectOrCreate?: LivreCategorieCreateOrConnectWithoutLivreInput | LivreCategorieCreateOrConnectWithoutLivreInput[]
    upsert?: LivreCategorieUpsertWithWhereUniqueWithoutLivreInput | LivreCategorieUpsertWithWhereUniqueWithoutLivreInput[]
    createMany?: LivreCategorieCreateManyLivreInputEnvelope
    set?: LivreCategorieWhereUniqueInput | LivreCategorieWhereUniqueInput[]
    disconnect?: LivreCategorieWhereUniqueInput | LivreCategorieWhereUniqueInput[]
    delete?: LivreCategorieWhereUniqueInput | LivreCategorieWhereUniqueInput[]
    connect?: LivreCategorieWhereUniqueInput | LivreCategorieWhereUniqueInput[]
    update?: LivreCategorieUpdateWithWhereUniqueWithoutLivreInput | LivreCategorieUpdateWithWhereUniqueWithoutLivreInput[]
    updateMany?: LivreCategorieUpdateManyWithWhereWithoutLivreInput | LivreCategorieUpdateManyWithWhereWithoutLivreInput[]
    deleteMany?: LivreCategorieScalarWhereInput | LivreCategorieScalarWhereInput[]
  }

  export type EmpruntUpdateManyWithoutLivreNestedInput = {
    create?: XOR<EmpruntCreateWithoutLivreInput, EmpruntUncheckedCreateWithoutLivreInput> | EmpruntCreateWithoutLivreInput[] | EmpruntUncheckedCreateWithoutLivreInput[]
    connectOrCreate?: EmpruntCreateOrConnectWithoutLivreInput | EmpruntCreateOrConnectWithoutLivreInput[]
    upsert?: EmpruntUpsertWithWhereUniqueWithoutLivreInput | EmpruntUpsertWithWhereUniqueWithoutLivreInput[]
    createMany?: EmpruntCreateManyLivreInputEnvelope
    set?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    disconnect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    delete?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    connect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    update?: EmpruntUpdateWithWhereUniqueWithoutLivreInput | EmpruntUpdateWithWhereUniqueWithoutLivreInput[]
    updateMany?: EmpruntUpdateManyWithWhereWithoutLivreInput | EmpruntUpdateManyWithWhereWithoutLivreInput[]
    deleteMany?: EmpruntScalarWhereInput | EmpruntScalarWhereInput[]
  }

  export type AvisUpdateManyWithoutLivreNestedInput = {
    create?: XOR<AvisCreateWithoutLivreInput, AvisUncheckedCreateWithoutLivreInput> | AvisCreateWithoutLivreInput[] | AvisUncheckedCreateWithoutLivreInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutLivreInput | AvisCreateOrConnectWithoutLivreInput[]
    upsert?: AvisUpsertWithWhereUniqueWithoutLivreInput | AvisUpsertWithWhereUniqueWithoutLivreInput[]
    createMany?: AvisCreateManyLivreInputEnvelope
    set?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    disconnect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    delete?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    update?: AvisUpdateWithWhereUniqueWithoutLivreInput | AvisUpdateWithWhereUniqueWithoutLivreInput[]
    updateMany?: AvisUpdateManyWithWhereWithoutLivreInput | AvisUpdateManyWithWhereWithoutLivreInput[]
    deleteMany?: AvisScalarWhereInput | AvisScalarWhereInput[]
  }

  export type LivreCategorieUncheckedUpdateManyWithoutLivreNestedInput = {
    create?: XOR<LivreCategorieCreateWithoutLivreInput, LivreCategorieUncheckedCreateWithoutLivreInput> | LivreCategorieCreateWithoutLivreInput[] | LivreCategorieUncheckedCreateWithoutLivreInput[]
    connectOrCreate?: LivreCategorieCreateOrConnectWithoutLivreInput | LivreCategorieCreateOrConnectWithoutLivreInput[]
    upsert?: LivreCategorieUpsertWithWhereUniqueWithoutLivreInput | LivreCategorieUpsertWithWhereUniqueWithoutLivreInput[]
    createMany?: LivreCategorieCreateManyLivreInputEnvelope
    set?: LivreCategorieWhereUniqueInput | LivreCategorieWhereUniqueInput[]
    disconnect?: LivreCategorieWhereUniqueInput | LivreCategorieWhereUniqueInput[]
    delete?: LivreCategorieWhereUniqueInput | LivreCategorieWhereUniqueInput[]
    connect?: LivreCategorieWhereUniqueInput | LivreCategorieWhereUniqueInput[]
    update?: LivreCategorieUpdateWithWhereUniqueWithoutLivreInput | LivreCategorieUpdateWithWhereUniqueWithoutLivreInput[]
    updateMany?: LivreCategorieUpdateManyWithWhereWithoutLivreInput | LivreCategorieUpdateManyWithWhereWithoutLivreInput[]
    deleteMany?: LivreCategorieScalarWhereInput | LivreCategorieScalarWhereInput[]
  }

  export type EmpruntUncheckedUpdateManyWithoutLivreNestedInput = {
    create?: XOR<EmpruntCreateWithoutLivreInput, EmpruntUncheckedCreateWithoutLivreInput> | EmpruntCreateWithoutLivreInput[] | EmpruntUncheckedCreateWithoutLivreInput[]
    connectOrCreate?: EmpruntCreateOrConnectWithoutLivreInput | EmpruntCreateOrConnectWithoutLivreInput[]
    upsert?: EmpruntUpsertWithWhereUniqueWithoutLivreInput | EmpruntUpsertWithWhereUniqueWithoutLivreInput[]
    createMany?: EmpruntCreateManyLivreInputEnvelope
    set?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    disconnect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    delete?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    connect?: EmpruntWhereUniqueInput | EmpruntWhereUniqueInput[]
    update?: EmpruntUpdateWithWhereUniqueWithoutLivreInput | EmpruntUpdateWithWhereUniqueWithoutLivreInput[]
    updateMany?: EmpruntUpdateManyWithWhereWithoutLivreInput | EmpruntUpdateManyWithWhereWithoutLivreInput[]
    deleteMany?: EmpruntScalarWhereInput | EmpruntScalarWhereInput[]
  }

  export type AvisUncheckedUpdateManyWithoutLivreNestedInput = {
    create?: XOR<AvisCreateWithoutLivreInput, AvisUncheckedCreateWithoutLivreInput> | AvisCreateWithoutLivreInput[] | AvisUncheckedCreateWithoutLivreInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutLivreInput | AvisCreateOrConnectWithoutLivreInput[]
    upsert?: AvisUpsertWithWhereUniqueWithoutLivreInput | AvisUpsertWithWhereUniqueWithoutLivreInput[]
    createMany?: AvisCreateManyLivreInputEnvelope
    set?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    disconnect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    delete?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    update?: AvisUpdateWithWhereUniqueWithoutLivreInput | AvisUpdateWithWhereUniqueWithoutLivreInput[]
    updateMany?: AvisUpdateManyWithWhereWithoutLivreInput | AvisUpdateManyWithWhereWithoutLivreInput[]
    deleteMany?: AvisScalarWhereInput | AvisScalarWhereInput[]
  }

  export type LivreCategorieCreateNestedManyWithoutCategorieInput = {
    create?: XOR<LivreCategorieCreateWithoutCategorieInput, LivreCategorieUncheckedCreateWithoutCategorieInput> | LivreCategorieCreateWithoutCategorieInput[] | LivreCategorieUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: LivreCategorieCreateOrConnectWithoutCategorieInput | LivreCategorieCreateOrConnectWithoutCategorieInput[]
    createMany?: LivreCategorieCreateManyCategorieInputEnvelope
    connect?: LivreCategorieWhereUniqueInput | LivreCategorieWhereUniqueInput[]
  }

  export type LivreCategorieUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: XOR<LivreCategorieCreateWithoutCategorieInput, LivreCategorieUncheckedCreateWithoutCategorieInput> | LivreCategorieCreateWithoutCategorieInput[] | LivreCategorieUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: LivreCategorieCreateOrConnectWithoutCategorieInput | LivreCategorieCreateOrConnectWithoutCategorieInput[]
    createMany?: LivreCategorieCreateManyCategorieInputEnvelope
    connect?: LivreCategorieWhereUniqueInput | LivreCategorieWhereUniqueInput[]
  }

  export type LivreCategorieUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<LivreCategorieCreateWithoutCategorieInput, LivreCategorieUncheckedCreateWithoutCategorieInput> | LivreCategorieCreateWithoutCategorieInput[] | LivreCategorieUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: LivreCategorieCreateOrConnectWithoutCategorieInput | LivreCategorieCreateOrConnectWithoutCategorieInput[]
    upsert?: LivreCategorieUpsertWithWhereUniqueWithoutCategorieInput | LivreCategorieUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: LivreCategorieCreateManyCategorieInputEnvelope
    set?: LivreCategorieWhereUniqueInput | LivreCategorieWhereUniqueInput[]
    disconnect?: LivreCategorieWhereUniqueInput | LivreCategorieWhereUniqueInput[]
    delete?: LivreCategorieWhereUniqueInput | LivreCategorieWhereUniqueInput[]
    connect?: LivreCategorieWhereUniqueInput | LivreCategorieWhereUniqueInput[]
    update?: LivreCategorieUpdateWithWhereUniqueWithoutCategorieInput | LivreCategorieUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: LivreCategorieUpdateManyWithWhereWithoutCategorieInput | LivreCategorieUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: LivreCategorieScalarWhereInput | LivreCategorieScalarWhereInput[]
  }

  export type LivreCategorieUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<LivreCategorieCreateWithoutCategorieInput, LivreCategorieUncheckedCreateWithoutCategorieInput> | LivreCategorieCreateWithoutCategorieInput[] | LivreCategorieUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: LivreCategorieCreateOrConnectWithoutCategorieInput | LivreCategorieCreateOrConnectWithoutCategorieInput[]
    upsert?: LivreCategorieUpsertWithWhereUniqueWithoutCategorieInput | LivreCategorieUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: LivreCategorieCreateManyCategorieInputEnvelope
    set?: LivreCategorieWhereUniqueInput | LivreCategorieWhereUniqueInput[]
    disconnect?: LivreCategorieWhereUniqueInput | LivreCategorieWhereUniqueInput[]
    delete?: LivreCategorieWhereUniqueInput | LivreCategorieWhereUniqueInput[]
    connect?: LivreCategorieWhereUniqueInput | LivreCategorieWhereUniqueInput[]
    update?: LivreCategorieUpdateWithWhereUniqueWithoutCategorieInput | LivreCategorieUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: LivreCategorieUpdateManyWithWhereWithoutCategorieInput | LivreCategorieUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: LivreCategorieScalarWhereInput | LivreCategorieScalarWhereInput[]
  }

  export type LivreCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<LivreCreateWithoutCategoriesInput, LivreUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: LivreCreateOrConnectWithoutCategoriesInput
    connect?: LivreWhereUniqueInput
  }

  export type CategorieCreateNestedOneWithoutLivresInput = {
    create?: XOR<CategorieCreateWithoutLivresInput, CategorieUncheckedCreateWithoutLivresInput>
    connectOrCreate?: CategorieCreateOrConnectWithoutLivresInput
    connect?: CategorieWhereUniqueInput
  }

  export type LivreUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<LivreCreateWithoutCategoriesInput, LivreUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: LivreCreateOrConnectWithoutCategoriesInput
    upsert?: LivreUpsertWithoutCategoriesInput
    connect?: LivreWhereUniqueInput
    update?: XOR<XOR<LivreUpdateToOneWithWhereWithoutCategoriesInput, LivreUpdateWithoutCategoriesInput>, LivreUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategorieUpdateOneRequiredWithoutLivresNestedInput = {
    create?: XOR<CategorieCreateWithoutLivresInput, CategorieUncheckedCreateWithoutLivresInput>
    connectOrCreate?: CategorieCreateOrConnectWithoutLivresInput
    upsert?: CategorieUpsertWithoutLivresInput
    connect?: CategorieWhereUniqueInput
    update?: XOR<XOR<CategorieUpdateToOneWithWhereWithoutLivresInput, CategorieUpdateWithoutLivresInput>, CategorieUncheckedUpdateWithoutLivresInput>
  }

  export type UtilisateurCreateNestedOneWithoutEmpruntsInput = {
    create?: XOR<UtilisateurCreateWithoutEmpruntsInput, UtilisateurUncheckedCreateWithoutEmpruntsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutEmpruntsInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type LivreCreateNestedOneWithoutEmpruntsInput = {
    create?: XOR<LivreCreateWithoutEmpruntsInput, LivreUncheckedCreateWithoutEmpruntsInput>
    connectOrCreate?: LivreCreateOrConnectWithoutEmpruntsInput
    connect?: LivreWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumStatutEmpruntFieldUpdateOperationsInput = {
    set?: $Enums.StatutEmprunt
  }

  export type UtilisateurUpdateOneRequiredWithoutEmpruntsNestedInput = {
    create?: XOR<UtilisateurCreateWithoutEmpruntsInput, UtilisateurUncheckedCreateWithoutEmpruntsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutEmpruntsInput
    upsert?: UtilisateurUpsertWithoutEmpruntsInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutEmpruntsInput, UtilisateurUpdateWithoutEmpruntsInput>, UtilisateurUncheckedUpdateWithoutEmpruntsInput>
  }

  export type LivreUpdateOneRequiredWithoutEmpruntsNestedInput = {
    create?: XOR<LivreCreateWithoutEmpruntsInput, LivreUncheckedCreateWithoutEmpruntsInput>
    connectOrCreate?: LivreCreateOrConnectWithoutEmpruntsInput
    upsert?: LivreUpsertWithoutEmpruntsInput
    connect?: LivreWhereUniqueInput
    update?: XOR<XOR<LivreUpdateToOneWithWhereWithoutEmpruntsInput, LivreUpdateWithoutEmpruntsInput>, LivreUncheckedUpdateWithoutEmpruntsInput>
  }

  export type UtilisateurCreateNestedOneWithoutAvisInput = {
    create?: XOR<UtilisateurCreateWithoutAvisInput, UtilisateurUncheckedCreateWithoutAvisInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutAvisInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type LivreCreateNestedOneWithoutAvisInput = {
    create?: XOR<LivreCreateWithoutAvisInput, LivreUncheckedCreateWithoutAvisInput>
    connectOrCreate?: LivreCreateOrConnectWithoutAvisInput
    connect?: LivreWhereUniqueInput
  }

  export type UtilisateurUpdateOneRequiredWithoutAvisNestedInput = {
    create?: XOR<UtilisateurCreateWithoutAvisInput, UtilisateurUncheckedCreateWithoutAvisInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutAvisInput
    upsert?: UtilisateurUpsertWithoutAvisInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutAvisInput, UtilisateurUpdateWithoutAvisInput>, UtilisateurUncheckedUpdateWithoutAvisInput>
  }

  export type LivreUpdateOneRequiredWithoutAvisNestedInput = {
    create?: XOR<LivreCreateWithoutAvisInput, LivreUncheckedCreateWithoutAvisInput>
    connectOrCreate?: LivreCreateOrConnectWithoutAvisInput
    upsert?: LivreUpsertWithoutAvisInput
    connect?: LivreWhereUniqueInput
    update?: XOR<XOR<LivreUpdateToOneWithWhereWithoutAvisInput, LivreUpdateWithoutAvisInput>, LivreUncheckedUpdateWithoutAvisInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatutEmpruntFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutEmprunt | EnumStatutEmpruntFieldRefInput<$PrismaModel>
    in?: $Enums.StatutEmprunt[]
    notIn?: $Enums.StatutEmprunt[]
    not?: NestedEnumStatutEmpruntFilter<$PrismaModel> | $Enums.StatutEmprunt
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatutEmpruntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutEmprunt | EnumStatutEmpruntFieldRefInput<$PrismaModel>
    in?: $Enums.StatutEmprunt[]
    notIn?: $Enums.StatutEmprunt[]
    not?: NestedEnumStatutEmpruntWithAggregatesFilter<$PrismaModel> | $Enums.StatutEmprunt
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutEmpruntFilter<$PrismaModel>
    _max?: NestedEnumStatutEmpruntFilter<$PrismaModel>
  }

  export type EmpruntCreateWithoutUtilisateurInput = {
    dateEmprunt?: Date | string
    dateRetour?: Date | string | null
    statut?: $Enums.StatutEmprunt
    livre: LivreCreateNestedOneWithoutEmpruntsInput
  }

  export type EmpruntUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    dateEmprunt?: Date | string
    dateRetour?: Date | string | null
    statut?: $Enums.StatutEmprunt
    livreId: number
  }

  export type EmpruntCreateOrConnectWithoutUtilisateurInput = {
    where: EmpruntWhereUniqueInput
    create: XOR<EmpruntCreateWithoutUtilisateurInput, EmpruntUncheckedCreateWithoutUtilisateurInput>
  }

  export type EmpruntCreateManyUtilisateurInputEnvelope = {
    data: EmpruntCreateManyUtilisateurInput | EmpruntCreateManyUtilisateurInput[]
  }

  export type AvisCreateWithoutUtilisateurInput = {
    note: number
    commentaire?: string | null
    dateCreation?: Date | string
    livre: LivreCreateNestedOneWithoutAvisInput
  }

  export type AvisUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    note: number
    commentaire?: string | null
    dateCreation?: Date | string
    livreId: number
  }

  export type AvisCreateOrConnectWithoutUtilisateurInput = {
    where: AvisWhereUniqueInput
    create: XOR<AvisCreateWithoutUtilisateurInput, AvisUncheckedCreateWithoutUtilisateurInput>
  }

  export type AvisCreateManyUtilisateurInputEnvelope = {
    data: AvisCreateManyUtilisateurInput | AvisCreateManyUtilisateurInput[]
  }

  export type EmpruntUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: EmpruntWhereUniqueInput
    update: XOR<EmpruntUpdateWithoutUtilisateurInput, EmpruntUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<EmpruntCreateWithoutUtilisateurInput, EmpruntUncheckedCreateWithoutUtilisateurInput>
  }

  export type EmpruntUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: EmpruntWhereUniqueInput
    data: XOR<EmpruntUpdateWithoutUtilisateurInput, EmpruntUncheckedUpdateWithoutUtilisateurInput>
  }

  export type EmpruntUpdateManyWithWhereWithoutUtilisateurInput = {
    where: EmpruntScalarWhereInput
    data: XOR<EmpruntUpdateManyMutationInput, EmpruntUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type EmpruntScalarWhereInput = {
    AND?: EmpruntScalarWhereInput | EmpruntScalarWhereInput[]
    OR?: EmpruntScalarWhereInput[]
    NOT?: EmpruntScalarWhereInput | EmpruntScalarWhereInput[]
    id?: IntFilter<"Emprunt"> | number
    dateEmprunt?: DateTimeFilter<"Emprunt"> | Date | string
    dateRetour?: DateTimeNullableFilter<"Emprunt"> | Date | string | null
    statut?: EnumStatutEmpruntFilter<"Emprunt"> | $Enums.StatutEmprunt
    utilisateurId?: IntFilter<"Emprunt"> | number
    livreId?: IntFilter<"Emprunt"> | number
  }

  export type AvisUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: AvisWhereUniqueInput
    update: XOR<AvisUpdateWithoutUtilisateurInput, AvisUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<AvisCreateWithoutUtilisateurInput, AvisUncheckedCreateWithoutUtilisateurInput>
  }

  export type AvisUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: AvisWhereUniqueInput
    data: XOR<AvisUpdateWithoutUtilisateurInput, AvisUncheckedUpdateWithoutUtilisateurInput>
  }

  export type AvisUpdateManyWithWhereWithoutUtilisateurInput = {
    where: AvisScalarWhereInput
    data: XOR<AvisUpdateManyMutationInput, AvisUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type AvisScalarWhereInput = {
    AND?: AvisScalarWhereInput | AvisScalarWhereInput[]
    OR?: AvisScalarWhereInput[]
    NOT?: AvisScalarWhereInput | AvisScalarWhereInput[]
    id?: IntFilter<"Avis"> | number
    note?: IntFilter<"Avis"> | number
    commentaire?: StringNullableFilter<"Avis"> | string | null
    dateCreation?: DateTimeFilter<"Avis"> | Date | string
    utilisateurId?: IntFilter<"Avis"> | number
    livreId?: IntFilter<"Avis"> | number
  }

  export type LivreCreateWithoutAuteurInput = {
    titre: string
    description?: string | null
    disponible?: boolean
    dateCreation?: Date | string
    categories?: LivreCategorieCreateNestedManyWithoutLivreInput
    emprunts?: EmpruntCreateNestedManyWithoutLivreInput
    avis?: AvisCreateNestedManyWithoutLivreInput
  }

  export type LivreUncheckedCreateWithoutAuteurInput = {
    id?: number
    titre: string
    description?: string | null
    disponible?: boolean
    dateCreation?: Date | string
    categories?: LivreCategorieUncheckedCreateNestedManyWithoutLivreInput
    emprunts?: EmpruntUncheckedCreateNestedManyWithoutLivreInput
    avis?: AvisUncheckedCreateNestedManyWithoutLivreInput
  }

  export type LivreCreateOrConnectWithoutAuteurInput = {
    where: LivreWhereUniqueInput
    create: XOR<LivreCreateWithoutAuteurInput, LivreUncheckedCreateWithoutAuteurInput>
  }

  export type LivreCreateManyAuteurInputEnvelope = {
    data: LivreCreateManyAuteurInput | LivreCreateManyAuteurInput[]
  }

  export type LivreUpsertWithWhereUniqueWithoutAuteurInput = {
    where: LivreWhereUniqueInput
    update: XOR<LivreUpdateWithoutAuteurInput, LivreUncheckedUpdateWithoutAuteurInput>
    create: XOR<LivreCreateWithoutAuteurInput, LivreUncheckedCreateWithoutAuteurInput>
  }

  export type LivreUpdateWithWhereUniqueWithoutAuteurInput = {
    where: LivreWhereUniqueInput
    data: XOR<LivreUpdateWithoutAuteurInput, LivreUncheckedUpdateWithoutAuteurInput>
  }

  export type LivreUpdateManyWithWhereWithoutAuteurInput = {
    where: LivreScalarWhereInput
    data: XOR<LivreUpdateManyMutationInput, LivreUncheckedUpdateManyWithoutAuteurInput>
  }

  export type LivreScalarWhereInput = {
    AND?: LivreScalarWhereInput | LivreScalarWhereInput[]
    OR?: LivreScalarWhereInput[]
    NOT?: LivreScalarWhereInput | LivreScalarWhereInput[]
    id?: IntFilter<"Livre"> | number
    titre?: StringFilter<"Livre"> | string
    description?: StringNullableFilter<"Livre"> | string | null
    disponible?: BoolFilter<"Livre"> | boolean
    dateCreation?: DateTimeFilter<"Livre"> | Date | string
    auteurId?: IntFilter<"Livre"> | number
  }

  export type AuteurCreateWithoutLivresInput = {
    nom: string
    biographie?: string | null
  }

  export type AuteurUncheckedCreateWithoutLivresInput = {
    id?: number
    nom: string
    biographie?: string | null
  }

  export type AuteurCreateOrConnectWithoutLivresInput = {
    where: AuteurWhereUniqueInput
    create: XOR<AuteurCreateWithoutLivresInput, AuteurUncheckedCreateWithoutLivresInput>
  }

  export type LivreCategorieCreateWithoutLivreInput = {
    categorie: CategorieCreateNestedOneWithoutLivresInput
  }

  export type LivreCategorieUncheckedCreateWithoutLivreInput = {
    categorieId: number
  }

  export type LivreCategorieCreateOrConnectWithoutLivreInput = {
    where: LivreCategorieWhereUniqueInput
    create: XOR<LivreCategorieCreateWithoutLivreInput, LivreCategorieUncheckedCreateWithoutLivreInput>
  }

  export type LivreCategorieCreateManyLivreInputEnvelope = {
    data: LivreCategorieCreateManyLivreInput | LivreCategorieCreateManyLivreInput[]
  }

  export type EmpruntCreateWithoutLivreInput = {
    dateEmprunt?: Date | string
    dateRetour?: Date | string | null
    statut?: $Enums.StatutEmprunt
    utilisateur: UtilisateurCreateNestedOneWithoutEmpruntsInput
  }

  export type EmpruntUncheckedCreateWithoutLivreInput = {
    id?: number
    dateEmprunt?: Date | string
    dateRetour?: Date | string | null
    statut?: $Enums.StatutEmprunt
    utilisateurId: number
  }

  export type EmpruntCreateOrConnectWithoutLivreInput = {
    where: EmpruntWhereUniqueInput
    create: XOR<EmpruntCreateWithoutLivreInput, EmpruntUncheckedCreateWithoutLivreInput>
  }

  export type EmpruntCreateManyLivreInputEnvelope = {
    data: EmpruntCreateManyLivreInput | EmpruntCreateManyLivreInput[]
  }

  export type AvisCreateWithoutLivreInput = {
    note: number
    commentaire?: string | null
    dateCreation?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutAvisInput
  }

  export type AvisUncheckedCreateWithoutLivreInput = {
    id?: number
    note: number
    commentaire?: string | null
    dateCreation?: Date | string
    utilisateurId: number
  }

  export type AvisCreateOrConnectWithoutLivreInput = {
    where: AvisWhereUniqueInput
    create: XOR<AvisCreateWithoutLivreInput, AvisUncheckedCreateWithoutLivreInput>
  }

  export type AvisCreateManyLivreInputEnvelope = {
    data: AvisCreateManyLivreInput | AvisCreateManyLivreInput[]
  }

  export type AuteurUpsertWithoutLivresInput = {
    update: XOR<AuteurUpdateWithoutLivresInput, AuteurUncheckedUpdateWithoutLivresInput>
    create: XOR<AuteurCreateWithoutLivresInput, AuteurUncheckedCreateWithoutLivresInput>
    where?: AuteurWhereInput
  }

  export type AuteurUpdateToOneWithWhereWithoutLivresInput = {
    where?: AuteurWhereInput
    data: XOR<AuteurUpdateWithoutLivresInput, AuteurUncheckedUpdateWithoutLivresInput>
  }

  export type AuteurUpdateWithoutLivresInput = {
    nom?: StringFieldUpdateOperationsInput | string
    biographie?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuteurUncheckedUpdateWithoutLivresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    biographie?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LivreCategorieUpsertWithWhereUniqueWithoutLivreInput = {
    where: LivreCategorieWhereUniqueInput
    update: XOR<LivreCategorieUpdateWithoutLivreInput, LivreCategorieUncheckedUpdateWithoutLivreInput>
    create: XOR<LivreCategorieCreateWithoutLivreInput, LivreCategorieUncheckedCreateWithoutLivreInput>
  }

  export type LivreCategorieUpdateWithWhereUniqueWithoutLivreInput = {
    where: LivreCategorieWhereUniqueInput
    data: XOR<LivreCategorieUpdateWithoutLivreInput, LivreCategorieUncheckedUpdateWithoutLivreInput>
  }

  export type LivreCategorieUpdateManyWithWhereWithoutLivreInput = {
    where: LivreCategorieScalarWhereInput
    data: XOR<LivreCategorieUpdateManyMutationInput, LivreCategorieUncheckedUpdateManyWithoutLivreInput>
  }

  export type LivreCategorieScalarWhereInput = {
    AND?: LivreCategorieScalarWhereInput | LivreCategorieScalarWhereInput[]
    OR?: LivreCategorieScalarWhereInput[]
    NOT?: LivreCategorieScalarWhereInput | LivreCategorieScalarWhereInput[]
    livreId?: IntFilter<"LivreCategorie"> | number
    categorieId?: IntFilter<"LivreCategorie"> | number
  }

  export type EmpruntUpsertWithWhereUniqueWithoutLivreInput = {
    where: EmpruntWhereUniqueInput
    update: XOR<EmpruntUpdateWithoutLivreInput, EmpruntUncheckedUpdateWithoutLivreInput>
    create: XOR<EmpruntCreateWithoutLivreInput, EmpruntUncheckedCreateWithoutLivreInput>
  }

  export type EmpruntUpdateWithWhereUniqueWithoutLivreInput = {
    where: EmpruntWhereUniqueInput
    data: XOR<EmpruntUpdateWithoutLivreInput, EmpruntUncheckedUpdateWithoutLivreInput>
  }

  export type EmpruntUpdateManyWithWhereWithoutLivreInput = {
    where: EmpruntScalarWhereInput
    data: XOR<EmpruntUpdateManyMutationInput, EmpruntUncheckedUpdateManyWithoutLivreInput>
  }

  export type AvisUpsertWithWhereUniqueWithoutLivreInput = {
    where: AvisWhereUniqueInput
    update: XOR<AvisUpdateWithoutLivreInput, AvisUncheckedUpdateWithoutLivreInput>
    create: XOR<AvisCreateWithoutLivreInput, AvisUncheckedCreateWithoutLivreInput>
  }

  export type AvisUpdateWithWhereUniqueWithoutLivreInput = {
    where: AvisWhereUniqueInput
    data: XOR<AvisUpdateWithoutLivreInput, AvisUncheckedUpdateWithoutLivreInput>
  }

  export type AvisUpdateManyWithWhereWithoutLivreInput = {
    where: AvisScalarWhereInput
    data: XOR<AvisUpdateManyMutationInput, AvisUncheckedUpdateManyWithoutLivreInput>
  }

  export type LivreCategorieCreateWithoutCategorieInput = {
    livre: LivreCreateNestedOneWithoutCategoriesInput
  }

  export type LivreCategorieUncheckedCreateWithoutCategorieInput = {
    livreId: number
  }

  export type LivreCategorieCreateOrConnectWithoutCategorieInput = {
    where: LivreCategorieWhereUniqueInput
    create: XOR<LivreCategorieCreateWithoutCategorieInput, LivreCategorieUncheckedCreateWithoutCategorieInput>
  }

  export type LivreCategorieCreateManyCategorieInputEnvelope = {
    data: LivreCategorieCreateManyCategorieInput | LivreCategorieCreateManyCategorieInput[]
  }

  export type LivreCategorieUpsertWithWhereUniqueWithoutCategorieInput = {
    where: LivreCategorieWhereUniqueInput
    update: XOR<LivreCategorieUpdateWithoutCategorieInput, LivreCategorieUncheckedUpdateWithoutCategorieInput>
    create: XOR<LivreCategorieCreateWithoutCategorieInput, LivreCategorieUncheckedCreateWithoutCategorieInput>
  }

  export type LivreCategorieUpdateWithWhereUniqueWithoutCategorieInput = {
    where: LivreCategorieWhereUniqueInput
    data: XOR<LivreCategorieUpdateWithoutCategorieInput, LivreCategorieUncheckedUpdateWithoutCategorieInput>
  }

  export type LivreCategorieUpdateManyWithWhereWithoutCategorieInput = {
    where: LivreCategorieScalarWhereInput
    data: XOR<LivreCategorieUpdateManyMutationInput, LivreCategorieUncheckedUpdateManyWithoutCategorieInput>
  }

  export type LivreCreateWithoutCategoriesInput = {
    titre: string
    description?: string | null
    disponible?: boolean
    dateCreation?: Date | string
    auteur: AuteurCreateNestedOneWithoutLivresInput
    emprunts?: EmpruntCreateNestedManyWithoutLivreInput
    avis?: AvisCreateNestedManyWithoutLivreInput
  }

  export type LivreUncheckedCreateWithoutCategoriesInput = {
    id?: number
    titre: string
    description?: string | null
    disponible?: boolean
    dateCreation?: Date | string
    auteurId: number
    emprunts?: EmpruntUncheckedCreateNestedManyWithoutLivreInput
    avis?: AvisUncheckedCreateNestedManyWithoutLivreInput
  }

  export type LivreCreateOrConnectWithoutCategoriesInput = {
    where: LivreWhereUniqueInput
    create: XOR<LivreCreateWithoutCategoriesInput, LivreUncheckedCreateWithoutCategoriesInput>
  }

  export type CategorieCreateWithoutLivresInput = {
    nom: string
  }

  export type CategorieUncheckedCreateWithoutLivresInput = {
    id?: number
    nom: string
  }

  export type CategorieCreateOrConnectWithoutLivresInput = {
    where: CategorieWhereUniqueInput
    create: XOR<CategorieCreateWithoutLivresInput, CategorieUncheckedCreateWithoutLivresInput>
  }

  export type LivreUpsertWithoutCategoriesInput = {
    update: XOR<LivreUpdateWithoutCategoriesInput, LivreUncheckedUpdateWithoutCategoriesInput>
    create: XOR<LivreCreateWithoutCategoriesInput, LivreUncheckedCreateWithoutCategoriesInput>
    where?: LivreWhereInput
  }

  export type LivreUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: LivreWhereInput
    data: XOR<LivreUpdateWithoutCategoriesInput, LivreUncheckedUpdateWithoutCategoriesInput>
  }

  export type LivreUpdateWithoutCategoriesInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: AuteurUpdateOneRequiredWithoutLivresNestedInput
    emprunts?: EmpruntUpdateManyWithoutLivreNestedInput
    avis?: AvisUpdateManyWithoutLivreNestedInput
  }

  export type LivreUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: IntFieldUpdateOperationsInput | number
    emprunts?: EmpruntUncheckedUpdateManyWithoutLivreNestedInput
    avis?: AvisUncheckedUpdateManyWithoutLivreNestedInput
  }

  export type CategorieUpsertWithoutLivresInput = {
    update: XOR<CategorieUpdateWithoutLivresInput, CategorieUncheckedUpdateWithoutLivresInput>
    create: XOR<CategorieCreateWithoutLivresInput, CategorieUncheckedCreateWithoutLivresInput>
    where?: CategorieWhereInput
  }

  export type CategorieUpdateToOneWithWhereWithoutLivresInput = {
    where?: CategorieWhereInput
    data: XOR<CategorieUpdateWithoutLivresInput, CategorieUncheckedUpdateWithoutLivresInput>
  }

  export type CategorieUpdateWithoutLivresInput = {
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type CategorieUncheckedUpdateWithoutLivresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type UtilisateurCreateWithoutEmpruntsInput = {
    nom: string
    email: string
    dateCreation?: Date | string
    avis?: AvisCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutEmpruntsInput = {
    id?: number
    nom: string
    email: string
    dateCreation?: Date | string
    avis?: AvisUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutEmpruntsInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutEmpruntsInput, UtilisateurUncheckedCreateWithoutEmpruntsInput>
  }

  export type LivreCreateWithoutEmpruntsInput = {
    titre: string
    description?: string | null
    disponible?: boolean
    dateCreation?: Date | string
    auteur: AuteurCreateNestedOneWithoutLivresInput
    categories?: LivreCategorieCreateNestedManyWithoutLivreInput
    avis?: AvisCreateNestedManyWithoutLivreInput
  }

  export type LivreUncheckedCreateWithoutEmpruntsInput = {
    id?: number
    titre: string
    description?: string | null
    disponible?: boolean
    dateCreation?: Date | string
    auteurId: number
    categories?: LivreCategorieUncheckedCreateNestedManyWithoutLivreInput
    avis?: AvisUncheckedCreateNestedManyWithoutLivreInput
  }

  export type LivreCreateOrConnectWithoutEmpruntsInput = {
    where: LivreWhereUniqueInput
    create: XOR<LivreCreateWithoutEmpruntsInput, LivreUncheckedCreateWithoutEmpruntsInput>
  }

  export type UtilisateurUpsertWithoutEmpruntsInput = {
    update: XOR<UtilisateurUpdateWithoutEmpruntsInput, UtilisateurUncheckedUpdateWithoutEmpruntsInput>
    create: XOR<UtilisateurCreateWithoutEmpruntsInput, UtilisateurUncheckedCreateWithoutEmpruntsInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutEmpruntsInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutEmpruntsInput, UtilisateurUncheckedUpdateWithoutEmpruntsInput>
  }

  export type UtilisateurUpdateWithoutEmpruntsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    avis?: AvisUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutEmpruntsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    avis?: AvisUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type LivreUpsertWithoutEmpruntsInput = {
    update: XOR<LivreUpdateWithoutEmpruntsInput, LivreUncheckedUpdateWithoutEmpruntsInput>
    create: XOR<LivreCreateWithoutEmpruntsInput, LivreUncheckedCreateWithoutEmpruntsInput>
    where?: LivreWhereInput
  }

  export type LivreUpdateToOneWithWhereWithoutEmpruntsInput = {
    where?: LivreWhereInput
    data: XOR<LivreUpdateWithoutEmpruntsInput, LivreUncheckedUpdateWithoutEmpruntsInput>
  }

  export type LivreUpdateWithoutEmpruntsInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: AuteurUpdateOneRequiredWithoutLivresNestedInput
    categories?: LivreCategorieUpdateManyWithoutLivreNestedInput
    avis?: AvisUpdateManyWithoutLivreNestedInput
  }

  export type LivreUncheckedUpdateWithoutEmpruntsInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: IntFieldUpdateOperationsInput | number
    categories?: LivreCategorieUncheckedUpdateManyWithoutLivreNestedInput
    avis?: AvisUncheckedUpdateManyWithoutLivreNestedInput
  }

  export type UtilisateurCreateWithoutAvisInput = {
    nom: string
    email: string
    dateCreation?: Date | string
    emprunts?: EmpruntCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutAvisInput = {
    id?: number
    nom: string
    email: string
    dateCreation?: Date | string
    emprunts?: EmpruntUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutAvisInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutAvisInput, UtilisateurUncheckedCreateWithoutAvisInput>
  }

  export type LivreCreateWithoutAvisInput = {
    titre: string
    description?: string | null
    disponible?: boolean
    dateCreation?: Date | string
    auteur: AuteurCreateNestedOneWithoutLivresInput
    categories?: LivreCategorieCreateNestedManyWithoutLivreInput
    emprunts?: EmpruntCreateNestedManyWithoutLivreInput
  }

  export type LivreUncheckedCreateWithoutAvisInput = {
    id?: number
    titre: string
    description?: string | null
    disponible?: boolean
    dateCreation?: Date | string
    auteurId: number
    categories?: LivreCategorieUncheckedCreateNestedManyWithoutLivreInput
    emprunts?: EmpruntUncheckedCreateNestedManyWithoutLivreInput
  }

  export type LivreCreateOrConnectWithoutAvisInput = {
    where: LivreWhereUniqueInput
    create: XOR<LivreCreateWithoutAvisInput, LivreUncheckedCreateWithoutAvisInput>
  }

  export type UtilisateurUpsertWithoutAvisInput = {
    update: XOR<UtilisateurUpdateWithoutAvisInput, UtilisateurUncheckedUpdateWithoutAvisInput>
    create: XOR<UtilisateurCreateWithoutAvisInput, UtilisateurUncheckedCreateWithoutAvisInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutAvisInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutAvisInput, UtilisateurUncheckedUpdateWithoutAvisInput>
  }

  export type UtilisateurUpdateWithoutAvisInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    emprunts?: EmpruntUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutAvisInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    emprunts?: EmpruntUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type LivreUpsertWithoutAvisInput = {
    update: XOR<LivreUpdateWithoutAvisInput, LivreUncheckedUpdateWithoutAvisInput>
    create: XOR<LivreCreateWithoutAvisInput, LivreUncheckedCreateWithoutAvisInput>
    where?: LivreWhereInput
  }

  export type LivreUpdateToOneWithWhereWithoutAvisInput = {
    where?: LivreWhereInput
    data: XOR<LivreUpdateWithoutAvisInput, LivreUncheckedUpdateWithoutAvisInput>
  }

  export type LivreUpdateWithoutAvisInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: AuteurUpdateOneRequiredWithoutLivresNestedInput
    categories?: LivreCategorieUpdateManyWithoutLivreNestedInput
    emprunts?: EmpruntUpdateManyWithoutLivreNestedInput
  }

  export type LivreUncheckedUpdateWithoutAvisInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: IntFieldUpdateOperationsInput | number
    categories?: LivreCategorieUncheckedUpdateManyWithoutLivreNestedInput
    emprunts?: EmpruntUncheckedUpdateManyWithoutLivreNestedInput
  }

  export type EmpruntCreateManyUtilisateurInput = {
    id?: number
    dateEmprunt?: Date | string
    dateRetour?: Date | string | null
    statut?: $Enums.StatutEmprunt
    livreId: number
  }

  export type AvisCreateManyUtilisateurInput = {
    id?: number
    note: number
    commentaire?: string | null
    dateCreation?: Date | string
    livreId: number
  }

  export type EmpruntUpdateWithoutUtilisateurInput = {
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetour?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutEmpruntFieldUpdateOperationsInput | $Enums.StatutEmprunt
    livre?: LivreUpdateOneRequiredWithoutEmpruntsNestedInput
  }

  export type EmpruntUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetour?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutEmpruntFieldUpdateOperationsInput | $Enums.StatutEmprunt
    livreId?: IntFieldUpdateOperationsInput | number
  }

  export type EmpruntUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetour?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutEmpruntFieldUpdateOperationsInput | $Enums.StatutEmprunt
    livreId?: IntFieldUpdateOperationsInput | number
  }

  export type AvisUpdateWithoutUtilisateurInput = {
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    livre?: LivreUpdateOneRequiredWithoutAvisNestedInput
  }

  export type AvisUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    livreId?: IntFieldUpdateOperationsInput | number
  }

  export type AvisUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    livreId?: IntFieldUpdateOperationsInput | number
  }

  export type LivreCreateManyAuteurInput = {
    id?: number
    titre: string
    description?: string | null
    disponible?: boolean
    dateCreation?: Date | string
  }

  export type LivreUpdateWithoutAuteurInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: LivreCategorieUpdateManyWithoutLivreNestedInput
    emprunts?: EmpruntUpdateManyWithoutLivreNestedInput
    avis?: AvisUpdateManyWithoutLivreNestedInput
  }

  export type LivreUncheckedUpdateWithoutAuteurInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: LivreCategorieUncheckedUpdateManyWithoutLivreNestedInput
    emprunts?: EmpruntUncheckedUpdateManyWithoutLivreNestedInput
    avis?: AvisUncheckedUpdateManyWithoutLivreNestedInput
  }

  export type LivreUncheckedUpdateManyWithoutAuteurInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LivreCategorieCreateManyLivreInput = {
    categorieId: number
  }

  export type EmpruntCreateManyLivreInput = {
    id?: number
    dateEmprunt?: Date | string
    dateRetour?: Date | string | null
    statut?: $Enums.StatutEmprunt
    utilisateurId: number
  }

  export type AvisCreateManyLivreInput = {
    id?: number
    note: number
    commentaire?: string | null
    dateCreation?: Date | string
    utilisateurId: number
  }

  export type LivreCategorieUpdateWithoutLivreInput = {
    categorie?: CategorieUpdateOneRequiredWithoutLivresNestedInput
  }

  export type LivreCategorieUncheckedUpdateWithoutLivreInput = {
    categorieId?: IntFieldUpdateOperationsInput | number
  }

  export type LivreCategorieUncheckedUpdateManyWithoutLivreInput = {
    categorieId?: IntFieldUpdateOperationsInput | number
  }

  export type EmpruntUpdateWithoutLivreInput = {
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetour?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutEmpruntFieldUpdateOperationsInput | $Enums.StatutEmprunt
    utilisateur?: UtilisateurUpdateOneRequiredWithoutEmpruntsNestedInput
  }

  export type EmpruntUncheckedUpdateWithoutLivreInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetour?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutEmpruntFieldUpdateOperationsInput | $Enums.StatutEmprunt
    utilisateurId?: IntFieldUpdateOperationsInput | number
  }

  export type EmpruntUncheckedUpdateManyWithoutLivreInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetour?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutEmpruntFieldUpdateOperationsInput | $Enums.StatutEmprunt
    utilisateurId?: IntFieldUpdateOperationsInput | number
  }

  export type AvisUpdateWithoutLivreInput = {
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutAvisNestedInput
  }

  export type AvisUncheckedUpdateWithoutLivreInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurId?: IntFieldUpdateOperationsInput | number
  }

  export type AvisUncheckedUpdateManyWithoutLivreInput = {
    id?: IntFieldUpdateOperationsInput | number
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurId?: IntFieldUpdateOperationsInput | number
  }

  export type LivreCategorieCreateManyCategorieInput = {
    livreId: number
  }

  export type LivreCategorieUpdateWithoutCategorieInput = {
    livre?: LivreUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type LivreCategorieUncheckedUpdateWithoutCategorieInput = {
    livreId?: IntFieldUpdateOperationsInput | number
  }

  export type LivreCategorieUncheckedUpdateManyWithoutCategorieInput = {
    livreId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
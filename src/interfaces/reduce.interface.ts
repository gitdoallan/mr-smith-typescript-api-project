export interface ReduceInterface<T> {
  (accumulator: T, currentValue: T): T;
}

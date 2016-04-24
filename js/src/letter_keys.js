// you would have a constant for each key
// (I would normally uppercase all constants)
const a = 119;
const d = 100;
const s = 115;
const w = 119;

// you would export all keys here
// note: you can't say `w: 119` here. It just isn't valid.
// This destructures to `w: w, a: a, ...`
export {
  w,
  a,
  d,
  s,
}
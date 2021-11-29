/*
 * @Date: 2021-11-29
 * @Description:
 */

export const INCREMENT = "increment";

export default {
  [INCREMENT](state) {
    state.count += 1;
  },
};

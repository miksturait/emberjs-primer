import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    if (serialized) {
      let [value, currency] = serialized.split(" ");
      return {
        value,
        currency
      }
    }

    return serialized;
  },

  serialize(deserialized) {
    if (deserialized) {
      return `${deserialized.value} ${deserialized.currency}`;
    }
    return deserialized;
  }
});

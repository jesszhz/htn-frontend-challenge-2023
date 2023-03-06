import _ from 'lodash';

export const endpoint = 'https://api.hackthenorth.com/v3/graphql';

export const keysToCamel = (snakeCaseObject) => {
  const camelCaseObject = {};
  Object.keys(snakeCaseObject).map((key) => {
    const newKeyName = _.camelCase(key);
    camelCaseObject[newKeyName] = snakeCaseObject[key];
  });
  return camelCaseObject;
};

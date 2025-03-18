export const buildingValidator = (buildName, buildYear, buildAddress, buildDesc, buildLatitude, buildLongitude, buildAltitude, buildPoiType, city) => {
  return validator(buildName) && validator(buildAddress) && numberValidator(buildLatitude) && numberValidator(buildLongitude) && numberValidator(buildAltitude) && numberValidator(buildYear) && validator(buildDesc) && validator(buildPoiType) && emptyValidator(city)
}

export const emailValidator = value => {
  return /^\S+@\S+\.[a-z]{2,}$/i.test(value)
}

export const emptyValidator = value => {
  return value !== null && value !== undefined
}

export const numberValidator = value => {
  return typeof value === 'number' && !Number.isNaN(value) && value > 0
}

export const validator = value => {
  return value && value.trim().length > 0
}

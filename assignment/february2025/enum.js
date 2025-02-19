const geoPoliticalZones = Object.freeze({
  NORTH_CENTRAL : ["benue","fCT", "kogi", "kwara", "nasarawa", "niger", "plateu"],
  NORTH_EAST : ["adamawa", "bauchi", "borno", "gombe","taraba", "yobe"],
  NORTH_WEST : ["kaduna", "katsina", "kano", "kebbi", "sokoto", "jigawa", "zamfara"],
  SOUTH_EAST : ["abia", "anambra", "ebonyi", "enugu", "imo"],
  SOUTH_SOUTH: ["akwa-Ibom", "bayelsa", "cross-River", "delta", "edo", "rivers"],
  SOUTH_WEST : ["ekiti","lagos", "osun", "ondo", "ogun", "oyo"]
});

function getStateInZone(state){
    for(let key in geoPoliticalZones){
        if(geoPoliticalZones[key].includes(state.toLowerCase())){
          return key;
        }
    }
    return null;
};
module.exports = getStateInZone;


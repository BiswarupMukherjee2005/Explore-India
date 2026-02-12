export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};

export const getStateBySlug = (slug, statesData) => {
  return statesData.states.find(state => state.id === slug);
};

export const getStatesByRegion = (regionId, statesData) => {
  return statesData.states.filter(state => state.region === regionId);
};

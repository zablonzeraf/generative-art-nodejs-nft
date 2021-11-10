const layersOrder = [
    { name: 'gc_bg', number: 1 },
    { name: 'lg', number: 2 },
    { name: 'md', number: 3 },
    { name: 'sm', number: 4 },
    { name: 'xs', number: 5 },
    // { name: 'ball', number: 2 },
    // { name: 'eye color', number: 12 },
    // { name: 'iris', number: 3 },
    // { name: 'shine', number: 1 },
    // { name: 'shine', number: 1 },
    // { name: 'bottom lid', number: 3 },
    // { name: 'top lid', number: 3 },
];
  
const format = {
    width: 1920,
    height: 1080
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 15;

module.exports = { layersOrder, format, rarity, defaultEdition };
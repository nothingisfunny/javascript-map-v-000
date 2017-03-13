function map(collection, callback){
	const result = [];

	for (let i = 0; i < collection.length; i++){
		const element = collection[i];
		result.push(callback(element, i, collection))
	}

	return result;
}

const transformedAutobotsWithMap = autobots.map(function (autobot) {
  return Object.assign({}, autobot, {
    strength: autobot.strength * 2,
    isTransformed: true,
  });
});
 
console.log(transformedAutobotsWithMap);
export const xmlToJson = (xml , options={} ) => {

	// Create the return object
	let obj = {};

  const { attTag="attributes" , nodeNamePrefix = "" } = options;

	if (xml.nodeType === 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj[attTag] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj[attTag][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType === 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = `${nodeNamePrefix}${item.nodeName}`;
			if (typeof(obj[nodeName]) === "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) === "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};


export const parseXML = (response , options={} ) =>{
  const { convert=true } = options;
  let parser = new DOMParser();
  let xmlDoc = parser.parseFromString(response,"text/xml");
  return convert === true ? xmlToJson(xmlDoc) : xmlDoc ;
}

export const parseJSON = (response) =>{
  return JSON.parse(response)
}

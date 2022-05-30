$(document)
		.ready(
				function() {
					var sampleQuery1 = "select DISTINCT * where {dbpedia-fr:Paris ?p ?v} LIMIT 100";
					var sampleQuery2 = "select DISTINCT * where {dbpedia-fr:Victor_Hugo ?p ?v} LIMIT 100";
					var sampleQuery3 = "select DISTINCT * where {dbpedia-fr:Victor_Hugo ?p ?v. FILTER(ISLITERAL(?v)) } LIMIT 100";
					var sampleQuery4 = "select DISTINCT * where {?s a dbo:Person } LIMIT 100";
					var sampleQuery5 = "select * where {?s rdfs:label ?l. FILTER(CONTAINS(?l,'chat')) } LIMIT 100";

					
					var flintConfig = {
						"interface" : {
							"toolbar" : true,
							"menu" : true
						},
						"namespaces" : [
								{
									"name" : "Friend of a friend",
									"prefix" : "foaf",
									"uri" : "http://xmlns.com/foaf/0.1/"
								},
								{
									"name" : "XML schema",
									"prefix" : "xsd",
									"uri" : "http://www.w3.org/2001/XMLSchema#"
								},
								{
									"name" : "SIOC",
									"prefix" : "sioc",
									"uri" : "http://rdfs.org/sioc/ns#"
								},
								{
									"name" : "Resource Description Framework",
									"prefix" : "rdf",
									"uri" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
								},
								{
									"name" : "Resource Description Framework schema",
									"prefix" : "rdfs",
									"uri" : "http://www.w3.org/2000/01/rdf-schema#"
								},
								{
									"name" : "Dublin Core",
									"prefix" : "dc",
									"uri" : "http://purl.org/dc/elements/1.1/"
								},
								{
									"name" : "Dublin Core terms",
									"prefix" : "dct",
									"uri" : "http://purl.org/dc/terms/"
								},
								{
									"name" : "Creative Commons",
									"prefix" : "cc",
									"uri" : "http://www.creativecommons.org/ns#"
								},
								{
									"name" : "Web Ontology Language",
									"prefix" : "owl",
									"uri" : "http://www.w3.org/2002/07/owl#"
								},
								{
									"name" : "Simple Knowledge Organisation System",
									"prefix" : "skos",
									"uri" : "http://www.w3.org/2004/02/skos/core#"
								},
								{
									"name" : "Geography",
									"prefix" : "geo",
									"uri" : "http://www.w3.org/2003/01/geo/wgs84_pos#"
								},
								{
									"name" : "Geonames",
									"prefix" : "geonames",
									"uri" : "http://www.geonames.org/ontology#"
								},
								{
									"name" : "DBPedia property",
									"prefix" : "dbp",
									"uri" : "http://dbpedia.org/property/"
								},
								{
									"name" : "DBPedia ontology",
									"prefix" : "dbo",
									"uri" : "http://dbpedia.org/ontology/"
								},
								{
									"name" : "DBpedia fr infobox property",
									"prefix" : "dbp-fr",
									"uri" : "http://fr.dbpedia.org/property/"
								},	
								{
									"name" : "DBpedia fr category",
									"prefix" : "category-fr",
									"uri" : "http://fr.dbpedia.org/resource/Catégorie:"
								},	
								{
									"name" : "DBpedia fr resource",
									"prefix" : "dbpedia-fr",
									"uri" : "http://fr.dbpedia.org/resource/"
								},	
								{
									"name" : "Wikidata resource",
									"prefix" : "dbpedia-wikidata",
									"uri" : "ttp://wikidata.dbpedia.org/resource/"
								},
								{
									"name" : "Vocabulary of Interlinked Datasets",
									"prefix" : "void",
									"uri" : "http://rdfs.org/ns/void#"
								},
								{
									"name" : "Prov ontology",
									"prefix" : "prov",
									"uri" : "http://www.w3.org/ns/prov#"
								},
								{
									"name" : "Service description",
									"prefix" : "sd",
									"uri" : "http://www.w3.org/ns/sparql-service-description#"
								},	
								{
									"name" : "Data catalog vocabulary",
									"prefix" : "dcat",
									"uri" : "http://www.w3.org/ns/dcat#"
								},		
								 
							
								{
									"name" : "Open Provenance Model Vocabulary",
									"prefix" : "opmv",
									"uri" : "http://purl.org/net/opmv/ns#"
								},
								{
									"name" : "Functional Requirements for Bibliographic Records",
									"prefix" : "frbr",
									"uri" : "http://purl.org/vocab/frbr/core#"
								}

						],
						"defaultEndpointParameters" : {
							"queryParameters" : {
								"format" : "output",
								"query" : "query",
								"update" : "update"
							},
							"selectFormats" : [ 
							// {
							// 	"name" : "Plain text",
							// 	"format" : "text",
							// 	"type" : "text/plain"
							// },
							 {
								"name" : "SPARQL-XML",
								"format" : "sparql",
								"type" : "application/sparql-results+xml"
							}, {
								"name" : "JSON",
								"format" : "json",
								"type" : "application/sparql-results+json"
							} ],
							"constructFormats" : [ {
								"name" : "Plain text",
								"format" : "text",
								"type" : "text/plain"
							}, {
								"name" : "RDF/XML",
								"format" : "rdfxml",
								"type" : "application/rdf+xml"
							}, {
								"name" : "Turtle",
								"format" : "turtle",
								"type" : "application/turtle"
							} ]
						},
						"endpoints" : [
							{
									"name" : "prod-DBpedia Fr",
									"uri" : "http://prod-dbpedia.inria.fr/sparql",
									"modes" : ["sparql10", "sparql11query"],
									queries : [
											{
												"name" : "Example 1",
												"description" : "Return a sample of properties and values related to Paris",
												"query" : sampleQuery1
											},
											{
												"name" : "Example 2",
												"description" : "Return a sample of properties and values related to Victor Hugo",
												"query" : sampleQuery2
											},{
												"name" : "Example 3",
												"description" : "Return a sample of properties and values related to Victor Hugo where the values are typed as literal",
												"query" : sampleQuery3
											},
											{
												"name" : "Example 4",
												"description" : "Return a sample of objects typed as Person",
												"query" : sampleQuery4
											},
											{
												"name" : "Example 5",
												"description" : "Return objects containing 'cat' in their labels",
												"query" : sampleQuery5
											}]
								}
								],
						"defaultModes" : [ {
							"name" : "SPARQL 1.0",
							"mode" : "sparql10"
						}, {
							"name" : "SPARQL 1.1 Query",
							"mode" : "sparql11query"
						}]
					}

					var flintEd = new FlintEditor("flint-test",
							"sparql/images", flintConfig);
				});

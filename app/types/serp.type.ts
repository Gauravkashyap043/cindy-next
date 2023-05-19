interface SerpProductAPIResponse {
	search_metadata: Searchmetadata;
	search_parameters: Searchparameters;
	product_results: Productresults;
	sellers_results: Sellersresults;
	specs_results: {
		[key: string]: {
			[key: string]: string;
		};
	};
	reviews_results: Reviewsresults;
	product_variations: Productvariation[];
}

interface Productvariation {
	thumbnail: string;
	link?: string;
	serpapi_link?: string;
}

interface Reviewsresults {
	ratings: Rating[];
	reviews: Review[];
}

interface Review {
	position: number;
	date: string;
	rating: number;
	source: string;
	content: string;
}

interface Rating {
	stars: number;
	amount: number;
}

interface Iphone {
	storage: string;
}

interface Sellersresults {
	online_sellers: Onlineseller[];
}

interface Onlineseller {
	position: number;
	name: string;
	link: string;
	base_price: string;
	additional_price: Additionalprice;
	total_price: string;
}

interface Additionalprice {
	shipping: string;
	tax: string;
}

interface Productresults {
	product_id: number;
	title: string;
	prices: string[];
	conditions: string[];
	typical_prices: Typicalprices;
	reviews: number;
	rating: number;
	extensions: string[];
	description: string;
	media: Media[];
	highlights: string[];
}

interface Media {
	type: string;
	link: string;
}

interface Typicalprices {
	low: string;
	high: string;
	shown_price: string;
}

interface Searchparameters {
	engine: string;
	product_id: string;
	google_domain: string;
	hl: string;
	gl: string;
	device: string;
}

interface Searchmetadata {
	id: string;
	status: string;
	json_endpoint: string;
	created_at: string;
	processed_at: string;
	google_product_url: string;
	raw_html_file: string;
	total_time_taken: number;
}

interface Review {
    date: string;
    title: string;
    rating: number;
    source: string;
    content: string;
    position: number;
}

interface Product {
    id: number;
    productID: string;
    title: string;
    prices: string[];
    conditions: string[];
    typicalPrices?: {
        create?: {
            low?: string;
            high?: string;
            shownPrice?: string;
        };
    };
    reviews: number;
    rating: number;
    extensions: string[];
    description: string;
    highlights: string[];
    dump: {
        error?: string
        specs_results: {
            details: {
                fit: string;
                style: string;
                gender: string;
                closure_type: string;
                sleeve_length_cm: string;
            };
        };
        product_results: {
            media: {
                link: string;
                type: string;
            }[];
            title: string;
            prices: string[];
            conditions: string[];
            extensions: string[];
            product_id: number;
            typical_prices: {
                shown_price: string;
            };
        };
        reviews_results: {
            ratings: {
                stars: number;
                amount: number;
            }[];
            reviews: Review[];
        };
        search_metadata: {
            id: string;
            status: string;
            created_at: string;
            processed_at: string;
            json_endpoint: string;
            raw_html_file: string;
            total_time_taken: number;
            google_product_url: string;
        };
        sellers_results: {
            online_sellers: {
                link: string;
                name: string;
                position: number;
                base_price: string;
                total_price: string;
                additional_price: {
                    tax: string;
                    shipping: string;
                };
            }[];
        };
        search_parameters: {
            gl: string;
            hl: string;
            device: string;
            engine: string;
            product_id: string;
            google_domain: string;
        };
    };
    createdAt: string;
    updatedAt: string;
}

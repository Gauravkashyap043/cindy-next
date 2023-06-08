type ProductPractice = {
    id: number;
    title: string;
    description?: string;
    price?: number;
    discountPercentage?: number;
    rating: number;
    stock?: number;
    brand?: string;
    category?: string;
    thumbnail?: string;
    images?: string[];
}

interface TypicalPrices {
    create: {
        low: string;
        high: string;
        shownPrice: string;
    };
}

interface DumpMedia {
    link: string;
    type: string;
}

interface DumpProductResults {
    media: DumpMedia[];
    title: string;
    prices: string[];
    conditions: string[];
    extensions: string[];
    product_id: number;
    description: string;
    typical_prices: TypicalPrices;
}

interface DumpSearchMetadata {
    id: string;
    status: string;
    created_at: string;
    processed_at: string;
    json_endpoint: string;
    raw_html_file: string;
    total_time_taken: number;
    google_product_url: string;
}

interface DumpOnlineSeller {
    link: string;
    name: string;
    position: number;
    base_price: string;
    total_price: string;
    additional_price: {
        tax: string;
        shipping: string;
    };
}

interface DumpSellersResults {
    online_sellers: DumpOnlineSeller[];
}

interface DumpSearchParameters {
    gl: string;
    hl: string;
    device: string;
    engine: string;
    product_id: string;
    google_domain: string;
}

interface Dump {
    error?: string
    product_results: DumpProductResults;
    search_metadata: DumpSearchMetadata;
    sellers_results: DumpSellersResults;
    search_parameters: DumpSearchParameters;
}

interface Product {
    id: number;
    productID: string;
    title: string;
    prices: string[];
    conditions: string[];
    typicalPrices: TypicalPrices;
    reviews: number;
    rating: number;
    extensions: string[];
    description: string;
    highlights: string[];
    dump: Dump;
    createdAt: string;
    updatedAt: string;
}

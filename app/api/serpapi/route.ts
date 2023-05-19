import { NextRequest, NextResponse } from 'next/server';
import { GoogleProductParameters, getJson } from 'serpapi';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const searchQuery = 'latest summer clothing for women';

export async function GET(req: NextRequest) {
	const response = await getJson('google_shopping', {
		api_key: '90d41b63b4dce84eef7640c29297e48783d553b73771203d61cffaf6525b6950',
		q: searchQuery,
	});
	const productIds: string[] = [];
	response.shopping_results.forEach(async (result: ShoppingResultsProduct) => {
		try {
			if (result.product_id) {
				productIds.push(result.product_id);
			}
		} catch (err) {
			console.log(err);
		}
	});
	productIds.forEach(async (id) => {
		// TODO: bestprice and condition
		const res: SerpProductAPIResponse = await getJson('google_product', {
			api_key:
				'90d41b63b4dce84eef7640c29297e48783d553b73771203d61cffaf6525b6950',
			google_domain: 'google.com',
			product_id: id,
			gl: 'us',
			hl: 'en',
		});
		await prisma.serpApiProduct.create({
			data: {
				product_id: res.product_results?.product_id,
				title: res.product_results?.title,
				prices: res.product_results?.prices,
				description: res.product_results?.description,
				rating: res.product_results?.rating,
				reviews: res.product_results?.reviews,
				media: {
					createMany: {
						data: res.product_results?.media,
						skipDuplicates: true,
					},
				},
				extensions: {
					set: res.product_results?.extensions,
				},
				price_range: {
					create: {
						high: res.product_results?.typical_prices?.high,
						low: res.product_results?.typical_prices?.low,
						shown_price: res.product_results?.typical_prices?.shown_price,
					},
				},
				sellers_results: {
					createMany: {
						data: res.sellers_results?.online_sellers,
						skipDuplicates: true,
					},
				},
				specifications: {
					createMany: {
						data: JSON.parse(JSON.stringify(res?.specs_results)),
					},
				},
				highlights: {
					createMany: {
						data: res.product_results?.highlights.map((highlight) => {
							return {
								content: highlight,
							};
						}),
						skipDuplicates: true,
					},
				},
			},
		});
	});
}

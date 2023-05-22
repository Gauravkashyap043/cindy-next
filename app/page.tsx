'use client';
import React, { useRef, useState } from 'react';
import ShopBy from '../src/components/ShopBy/ShopBy';
import HorizontalScrollList from '@/src/components/HorizontalScrollList/HorizontalScrollList';
import ProductCard from '@/src/components/ProductCard/ProductCard';
import { TabContent, Tabs } from '@/src/components/HomeTabs/Tabs';
import { pillButtonData } from '@/utils/data';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url: string) => {
	const response = await axios.get(url);
	return response.data;
};

export default function HomePage() {
	const [pillActive, setPillActive] = useState<number>(pillButtonData[0].id);
	const [pillCategory, setPillCategory] = useState<string>('');
	const { data, error } = useSWR<Product[]>(
		'https://fakestoreapi.com/products',
		fetcher
	);

	if (error) return <p>Loading failed...</p>;
	if (!data) return <h1>Loading...</h1>;

	const filteredProducts = data.filter((product: Product) => {
		// Check if the pill button is active and the product category matches
		if (pillActive == 1 || pillCategory === 'All') {
			return true; // Show all products
		} else {
			return product.category === pillCategory;
		}
	});

	return (
		<div className={` m-auto border main-container`}>
			<ShopBy name='Shop from ' colorName='Favourite' />
			<div className='w-full'>
				<HorizontalScrollList data={data} />
			</div>
			<Tabs>
				<TabContent label='Explore Our' colorLabel='Collection'>
					<div>
						<div className='overflow-auto w-full tab-cont mb-[50px]'>
							<div className='min-w-[1578px] overflow-hidden h-[48px] pills-btn-div w-full flex text-[16px]  text-[#222222] cursor-pointer'>
								{pillButtonData.map((items: any) => {
									return (
										<div
											className={`pills-btn transition ease-in-out w-[170px] h-full rounded-full border flex justify-center items-center mr-2 ${
												pillActive == items.id
													? 'bg-[#008ECC] text-white'
													: 'bg-white text-black'
											} `}
											key={items.id}
											onClick={() => {
												setPillActive(items.id), setPillCategory(items.name);
											}}
										>
											{items.name}
										</div>
									);
								})}
							</div>
						</div>
						<div className='product-card-div'>
							{filteredProducts.map((product: Product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					</div>
				</TabContent>
				<TabContent label='Explore our' colorLabel='Giftable'>
					<div className='product-card-div min-h-[500px]'>
						{/* <ProductCard />
            <ProductCard />
            <ProductCard /> */}
					</div>
				</TabContent>
				<TabContent label='Explore Our Desi' colorLabel='Collection'>
					<div className='product-card-div min-h-[500px]'>
						{/* <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> */}
					</div>
				</TabContent>
			</Tabs>

			<div className='w-full border  h-[136px] mt-[30px]'>
				<p className='text-[#868686] text-center'>
					You have viewed 72 of 1000 products
				</p>
				<div className='w-full'>
					<button
						className='h-[60px] bg-white text-[#575757] w-full mt-[50px]'
						onClick={() => {
							window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
						}}
					>
						Load More
					</button>
				</div>
			</div>
		</div>
	);
}

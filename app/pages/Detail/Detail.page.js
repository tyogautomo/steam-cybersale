import React from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import {
	View, Text, ImageBackground, FlatList, Image
} from 'react-native';

import { styles } from './Detail.style';
import { listData } from '../../resources/dummy';

const DetailPage = ({ route }) => {
	const { item } = route.params;

	const renderPreviewCard = (item) => {
		return (
			<SharedElement id={`photo.${item.id}`}>
				<ImageBackground
					source={{ uri: item.image }}
					style={styles.imagePreviewContainer}
					imageStyle={styles.imagePreviewStyle}
					resizeMode="cover"
				/>
			</SharedElement>
		);
	};

	const renderHorizontalList = () => {
		return (
			<View style={styles.listContainer}>
				{listData.map(item => renderPreviewCard(item))}
			</View>
		);
	};

	const renderFlatlistItem = ({ item }) => {
		console.log(item, 'ITEM <<<<<<<<<<<<<<<<<');
		return (
			<View>
				<Image source={item.image} style={styles.detailImage} resizeMode="cover" />
			</View>
		);
	};

	const renderDetailInfoList = () => {
		return (
			<FlatList
				data={listData}
				renderItem={renderFlatlistItem}
				keyExtractor={(item) => item.id}
				horizontal
			/>
		);
	};

	return (
		<View style={styles.container}>
			{renderHorizontalList()}
			{renderDetailInfoList()}
		</View>
	);
};

export { DetailPage };

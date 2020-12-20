import React, { useEffect, useRef } from 'react';
import { BackHandler } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import {
	View, Text, ImageBackground, Image, Dimensions, ScrollView, Animated
} from 'react-native';

import { styles } from './Detail.style';
import { listData } from '../../resources/dummy';

const { width } = Dimensions.get('window');

const DetailPage = ({ route, navigation }) => {
	const { item } = route.params;
	const initialItemIndex = listData.findIndex(el => el.id === item.id);
	const mountedAnimation = useRef(new Animated.Value(0)).current;
	const activeIndex = useRef(new Animated.Value(initialItemIndex)).current;
	const activeIndexAnimation = useRef(new Animated.Value(initialItemIndex)).current;

	useEffect(() => {
		runMountedAnimation();
		initBackHandler();
		return () => initBackHandler().remove();
	}, []);

	const onPressBack = () => {
		detailAnimation(0).start(() => navigation.goBack());
	};

	const onMomentumScrollEnd = (e) => {
		const newIndex = (e.nativeEvent.contentOffset.x) / width;
		activeIndex.setValue(newIndex);
	};

	const initBackHandler = () => {
		const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
			onPressBack();
			return true;
		})
		return backHandler;
	};

	const runMountedAnimation = () => {
		Animated.parallel([
			Animated.timing(activeIndexAnimation, {
				toValue: activeIndex,
				duration: 200,
				useNativeDriver: true
			}),
			detailAnimation(1, 400)
		]).start();
	};

	const detailAnimation = (toValue, delay) => {
		return Animated.timing(mountedAnimation, {
			toValue,
			duration: 300,
			delay,
			useNativeDriver: true
		});
	};

	const renderPreviewIcon = (item, i) => {
		return (
			<SharedElement id={`photo.${item.id}`} key={i}>
				<ImageBackground
					source={{ uri: item.image }}
					style={styles.imagePreviewContainer}
					imageStyle={styles.imagePreviewStyle}
					resizeMode="cover"
				/>
			</SharedElement>
		);
	};

	const renderIconList = () => {
		const size = (width * 0.15) + 16;
		const translateX = activeIndexAnimation.interpolate({
			inputRange: [-1, 0, 1],
			outputRange: [size, 0, -size]
		})
		return (
			<Animated.View style={[
				styles.listContainer,
				{
					transform: [{ translateX }]
				}
			]}>
				{listData.map((item, i) => renderPreviewIcon(item, i))}
			</Animated.View>
		);
	};

	const renderDetailContainer = ({ item }) => {
		return (
			<View style={styles.detailContainer}>
				<Image source={{ uri: item.image }} style={styles.detailImage} resizeMode="cover" />
				<View style={styles.detailDescriptionContainer}>
					<ScrollView>
						{Array(50).fill('').map((_, i) => (
							<Text key={i}>{item.title}</Text>
						))}
					</ScrollView>
				</View>
			</View>
		);
	};

	const renderDetailInfoList = () => {
		const translateY = mountedAnimation.interpolate({
			inputRange: [0, 1],
			outputRange: [50, 0]
		})
		return (
			<Animated.FlatList
				style={{
					opacity: mountedAnimation,
					transform: [{ translateY }]
				}}
				data={listData}
				renderItem={renderDetailContainer}
				keyExtractor={(item) => item.id}
				onMomentumScrollEnd={onMomentumScrollEnd}
				horizontal
				snapToInterval={width}
				snapToAlignment="start"
				decelerationRate="fast"
				pagingEnabled
				initialScrollIndex={initialItemIndex}
			/>
		);
	};

	return (
		<View style={styles.container}>
			{renderIconList()}
			{renderDetailInfoList()}
		</View>
	);
};

export { DetailPage };

import React, { useEffect, useRef, useState } from 'react';
import { BackHandler } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
	View, Text, ImageBackground, Image, Dimensions, ScrollView, Animated
} from 'react-native';

import { styles } from './Detail.style';
import { listData } from '../../resources/dummy';
import { transitionDelay } from '../../utils/constant';

const { width } = Dimensions.get('window');

const DetailPage = ({ route, navigation }) => {
	const { item } = route.params;
	const forceUpdate = React.useReducer(bool => !bool)[1];
	const flatListRef = useRef();
	const initialItemIndex = listData.findIndex(el => el.id === item.id);
	const mountedAnimation = useRef(new Animated.Value(0)).current;
	const activeIndex = useRef(new Animated.Value(initialItemIndex)).current;
	const [indexState, setIndexState] = useState(initialItemIndex);
	const activeIndexAnimation = useRef(new Animated.Value(initialItemIndex)).current;

	useEffect(() => {
		runMountedAnimation();
		const backHandler = initBackHandler();
		return () => backHandler.remove();
	}, []);

	const onPressBack = () => {
		detailAnimation(0).start(() => navigation.goBack());
	};

	const onMomentumScrollEnd = (e) => {
		const newIndex = (e.nativeEvent.contentOffset.x) / width;
		activeIndex.setValue(newIndex);
		setIndexState(newIndex);
		forceUpdate();
	};

	const onPressIcon = (i) => () => {
		activeIndex.setValue(i);
		setIndexState(i);
		flatListRef.current.scrollToIndex({
			index: i,
			animated: true
		});
		forceUpdate();
	};

	const initBackHandler = () => {
		return BackHandler.addEventListener('hardwareBackPress', () => {
			onPressBack();
			return true;
		});
	};

	const runMountedAnimation = () => {
		Animated.parallel([
			iconIndexAnimation(200),
			detailAnimation(1, transitionDelay)
		]).start();
	};

	const iconIndexAnimation = (duration) => {
		return Animated.spring(activeIndexAnimation, {
			toValue: activeIndex,
			duration,
			useNativeDriver: true
		})
	};

	const detailAnimation = (toValue, delay) => {
		return Animated.timing(mountedAnimation, {
			toValue,
			duration: 400,
			delay,
			useNativeDriver: true
		});
	};

	const renderIcon = (item, i) => {
		const opacity = activeIndexAnimation.interpolate({
			inputRange: [(i - 1), i, (i + 1)],
			outputRange: [0.2, 1, 0.2],
			extrapolate: 'clamp'
		});
		const converText = (title) => {
			if (title.length > 6) {
				return `${title.substr(0, 6)}...`
			}
			return title;
		};
		return (
			<TouchableOpacity key={i} onPress={onPressIcon(i)}>
				<Animated.View style={[styles.iconContainer, { opacity }]}>
					<SharedElement id={`photo.${item.id}`} >
						<ImageBackground
							source={{ uri: item.image }}
							style={[styles.icon, { borderWidth: indexState == i ? 2 : 0 }]}
							imageStyle={styles.imagePreviewStyle}
							resizeMode="cover"
						/>
					</SharedElement>
					<Animated.Text style={[
						{ opacity: mountedAnimation },
						styles.iconTitle
					]}
					>
						{converText(item.title)}
					</Animated.Text>
				</Animated.View>
			</TouchableOpacity>
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
				{listData.map((item, i) => renderIcon(item, i))}
			</Animated.View>
		);
	};

	const renderDetailContainer = ({ item }) => {
		return (
			<View style={styles.detailContainer}>
				<Image source={{ uri: item.image }} style={styles.detailImage} resizeMode="cover" />
				<View style={styles.detailDescriptionContainer}>
					<ScrollView showsVerticalScrollIndicator={false}>
						<Text style={styles.descriptionTitle}>{item.title}</Text>
						{Array(7).fill('').map((_, i) => <Text key={i} style={styles.descText}>{item.title} description explained</Text>)}
						<View style={{ height: 20 }} />
						{Array(7).fill('').map((_, i) => <Text key={i} style={styles.descText}>{item.title} description explained</Text>)}
						<View style={{ height: 20 }} />
						{Array(7).fill('').map((_, i) => <Text key={i} style={styles.descText}>{item.title} description explained</Text>)}
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
				ref={flatListRef}
				style={{
					opacity: mountedAnimation,
					transform: [{ translateY }]
				}}
				data={listData}
				renderItem={renderDetailContainer}
				keyExtractor={(item) => item.id}
				onMomentumScrollEnd={onMomentumScrollEnd}
				snapToInterval={width}
				snapToAlignment="start"
				decelerationRate="fast"
				initialScrollIndex={initialItemIndex}
				getItemLayout={(data, index) => ({
					length: width,
					offset: width * index,
					index
				})}
				horizontal
				pagingEnabled
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

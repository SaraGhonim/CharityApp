import React from 'react';
import {useWindowDimensions, I18nManager} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import {styles} from './Index.Styles';
import {Text, Div, Icon} from 'react-native-magnus';
import Image from 'react-native-fast-image';
import CompleteIntroButtons from '../../Components/CompleteIntroButtons';
import AppIntroSlider from 'react-native-app-intro-slider';
import {IntroSlides} from '../../../../constants/mocks';
import {t} from '../../../../translations/i18n';
import {colorPalette} from '../../../../utils/theme';

// Types
interface SliderItem {
	image: string;
	title: string;
	body: string;
	key: string;
}
type SliderProps = {
	item: SliderItem;
};
// End of types

export const SliderContainer = () => {
	const {width} = useWindowDimensions();

	const renderItem = ({item}: SliderProps) => {
		return (
			<Div bg={colorPalette.surfaceColor} alignItems="center" flex={1}>
				<Div justifyContent="center" h="50%">
					<Image
						style={{width: width * 0.45, height: width * 0.45}}
						source={item.image}
						resizeMode={Image.resizeMode.contain}
					/>
				</Div>
				<Div>
					<Text
						fontSize="4xl"
						textAlign="center"
						color={colorPalette.onPrimaryLight}>
						{t(item.title)}
					</Text>
					<Text
						fontSize="lg"
						textAlign="center"
						color={colorPalette.onPrimaryLight}
						m="sm">
						{t(item.body)}
					</Text>
				</Div>
				{item.key === '3' ? <CompleteIntroButtons /> : null}
			</Div>
		);
	};

	const renderNextButton = () => {
		const iconName = I18nManager.isRTL ? 'arrowleft' : 'arrowright';
		return (
			<Div
				rounded="circle"
				bg={colorPalette.primary}
				w={40}
				h={40}
				justifyContent="center"
				alignItems="center">
				<Icon
					name={iconName}
					color={colorPalette.onPrimary}
					fontSize="3xl"
				/>
			</Div>
		);
	};

	return (
		<SafeAreaView
			style={styles.containerStyle}
			edges={['right', 'top', 'left']}>
			<AppIntroSlider
				data={IntroSlides}
				renderItem={renderItem}
				renderNextButton={renderNextButton}
				showDoneButton={false}
			/>
		</SafeAreaView>
	);
};

const mapStateToProps = (state: any) => ({
	language: state.app_language.language,
});

export const Slider = connect(mapStateToProps)(SliderContainer);

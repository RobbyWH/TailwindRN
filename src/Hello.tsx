import * as React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';

const Hello = () => {
	const tailwind = useTailwind();
  console.log('TEST 4', tailwind('pt-[13] items-center'))

	return (
		<SafeAreaView style={tailwind('h-full')}>
			<View style={tailwind('pt-[12] items-center')}>
				<View style={tailwind('bg-gray-light px-3 py-1 rounded-full')}>
					<Text style={tailwind('text-red font-semibold')}>
						Hello Tailwind
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Hello;
module.exports = {
	preset: 'jest-preset-angular',
	globalSetup: 'jest-preset-angular/global-setup',
	globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/tsconfig.spec.json',
			stringifyContentPathRegex: '\\.(html|svg)$',
		},
	},
	coverageDirectory: 'coverage',
	snapshotSerializers: [
		'jest-preset-angular/build/serializers/no-ng-attributes',
		'jest-preset-angular/build/serializers/ng-snapshot',
		'jest-preset-angular/build/serializers/html-comment',
	],
	moduleNameMapper: {
		'@app/ui/theme/layout': ['<rootDir>/src/app/ui/theme/layout/index.ts'],
	},
};

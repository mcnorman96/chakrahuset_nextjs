import {isEmpty} from 'lodash';

export const getPreviewRedirectUrl = ( postType = '', previewPostId = '' ) => {

	if ( isEmpty( postType ) || isEmpty( previewPostId ) ) {
		return '';
	}

	switch ( postType ) {
	case 'post':
		return `/post/preview/${previewPostId}/`;
	case 'behandlinger':
		return `/treatment/preview/${previewPostId}/`;
	case 'page':
		return `/page/preview/${previewPostId}/`;
	default:
		return '/';
	}
};

export const getLoginPreviewRedirectUrl = ( postType = '', previewPostId = '' ) => {
	return `/login/?postType=${postType || ''}&previewPostId=${previewPostId || ''}`;
};

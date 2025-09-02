/**
 * External dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import type { ElementType } from 'react';

/**
 * Internal dependencies
 */
import './editor.scss';

const PaginationItem = ( {
	content,
	tag: Tag = 'a',
	extraClass = '',
}: {
	content: string;
	tag?: ElementType;
	extraClass?: string;
} ) =>
	Tag === 'a' ? (
		<Tag
			className={ `page-numbers ${ extraClass }` }
			href="#comments-pagination-numbers-pseudo-link"
			onClick={ ( event ) => event.preventDefault() }
		>
			{ content }
		</Tag>
	) : (
		<Tag className={ `page-numbers ${ extraClass }` }>{ content }</Tag>
	);

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<PaginationItem content="1" />
			<PaginationItem content="2" />
			<PaginationItem content="3" tag="span" extraClass="current" />
			<PaginationItem content="4" />
			<PaginationItem content="5" />
			<PaginationItem content="..." tag="span" extraClass="dots" />
			<PaginationItem content="8" />
		</div>
	);
}

import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

export default function Edit() {
	return <p {...useBlockProps()}>{__("Search Box", "search-box")}</p>;
}

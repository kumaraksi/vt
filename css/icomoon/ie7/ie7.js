/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-user': '&#xf007;',
		'icon-check': '&#xf00c;',
		'icon-times': '&#xf00d;',
		'icon-globe': '&#xf0ac;',
		'icon-truck': '&#xf0d1;',
		'icon-phone': '&#xe004;',
		'icon-map': '&#xe025;',
		'icon-envelope': '&#xe028;',
		'icon-profile-male': '&#xe040;',
		'icon-chat': '&#xe049;',
		'icon-lifesaver': '&#xe054;',
		'icon-facebook': '&#xe05d;',
		'icon-twitter': '&#xe05e;',
		'icon-googleplus': '&#xe05f;',
		'icon-tumblr': '&#xe061;',
		'icon-linkedin': '&#xe062;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());

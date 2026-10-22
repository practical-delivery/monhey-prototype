/* @ds-bundle: {"format":3,"namespace":"MaterialDesign3DesignSystem_ea7b79","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Fab","sourcePath":"components/actions/Fab.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Card","sourcePath":"components/containment/Card.jsx"},{"name":"Chip","sourcePath":"components/containment/Chip.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"NavigationBar","sourcePath":"components/navigation/NavigationBar.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"a1156bd604c4","components/actions/Fab.jsx":"43f20d0c2940","components/actions/IconButton.jsx":"bfdac62a701c","components/containment/Card.jsx":"8aa586b670f5","components/containment/Chip.jsx":"7f97cf38b7ac","components/feedback/Badge.jsx":"63e92a7292d2","components/feedback/Dialog.jsx":"54ae23fab619","components/forms/Switch.jsx":"2389461f79d3","components/forms/TextField.jsx":"368fac755271","components/navigation/NavigationBar.jsx":"0d6a6e29fcd2","m3.jsx":"92f3c4b23d3c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MaterialDesign3DesignSystem_ea7b79 = window.MaterialDesign3DesignSystem_ea7b79 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Material 3 common button. Pill-shaped, 40px tall, sentence-case label.
 * Variants: elevated · filled · tonal · outlined · text.
 */
function Button({
  variant = 'filled',
  icon,
  iconPosition = 'leading',
  disabled = false,
  onClick,
  type = 'button',
  children,
  style = {}
}) {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const schemes = {
    filled: {
      bg: 'var(--md-sys-color-primary)',
      fg: 'var(--md-sys-color-on-primary)',
      border: 'none',
      shadow: 'none'
    },
    tonal: {
      bg: 'var(--md-sys-color-secondary-container)',
      fg: 'var(--md-sys-color-on-secondary-container)',
      border: 'none',
      shadow: 'none'
    },
    elevated: {
      bg: 'var(--md-sys-color-surface-container-low)',
      fg: 'var(--md-sys-color-primary)',
      border: 'none',
      shadow: 'var(--md-sys-elevation-level1)'
    },
    outlined: {
      bg: 'transparent',
      fg: 'var(--md-sys-color-primary)',
      border: '1px solid var(--md-sys-color-outline)',
      shadow: 'none'
    },
    text: {
      bg: 'transparent',
      fg: 'var(--md-sys-color-primary)',
      border: 'none',
      shadow: 'none'
    }
  };
  const s = schemes[variant] || schemes.filled;
  const stateOpacity = pressed ? 0.12 : hover ? 0.08 : 0;
  const hasIcon = Boolean(icon);
  const padH = variant === 'text' ? 12 : 24;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: iconPosition === 'trailing' ? 'row-reverse' : 'row',
      gap: 8,
      height: 40,
      padding: hasIcon ? iconPosition === 'trailing' ? `0 ${padH}px 0 24px` : `0 24px 0 16px` : `0 ${padH}px`,
      minWidth: 48,
      border: s.border,
      borderRadius: 'var(--md-sys-shape-corner-full)',
      background: s.bg,
      color: s.fg,
      boxShadow: disabled ? 'none' : s.shadow,
      fontFamily: 'var(--md-sys-typescale-font)',
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '0.1px',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.38 : 1,
      overflow: 'hidden',
      transition: 'box-shadow 0.2s var(--md-sys-motion-easing-standard)',
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: s.fg,
      opacity: disabled ? 0 : stateOpacity,
      transition: 'opacity 0.1s',
      pointerEvents: 'none'
    }
  }), hasIcon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 18,
      position: 'relative'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/Fab.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Material 3 Floating Action Button. Sizes: small (40) · regular (56) · large (96).
 * `extended` shows a label beside the icon. Color: primary | secondary | tertiary | surface.
 */
function Fab({
  icon,
  label,
  size = 'regular',
  color = 'primary',
  extended = false,
  disabled = false,
  onClick,
  ariaLabel,
  style = {}
}) {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const colors = {
    primary: {
      bg: 'var(--md-sys-color-primary-container)',
      fg: 'var(--md-sys-color-on-primary-container)'
    },
    secondary: {
      bg: 'var(--md-sys-color-secondary-container)',
      fg: 'var(--md-sys-color-on-secondary-container)'
    },
    tertiary: {
      bg: 'var(--md-sys-color-tertiary-container)',
      fg: 'var(--md-sys-color-on-tertiary-container)'
    },
    surface: {
      bg: 'var(--md-sys-color-surface-container-high)',
      fg: 'var(--md-sys-color-primary)'
    }
  };
  const c = colors[color] || colors.primary;
  const dims = {
    small: 40,
    regular: 56,
    large: 96
  };
  const radii = {
    small: 'var(--md-sys-shape-corner-medium)',
    regular: 'var(--md-sys-shape-corner-large)',
    large: 'var(--md-sys-shape-corner-extra-large)'
  };
  const iconSizes = {
    small: 24,
    regular: 24,
    large: 36
  };
  const d = dims[size];
  const stateOpacity = pressed ? 0.12 : hover ? 0.08 : 0;
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": ariaLabel || label,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      height: d,
      width: extended ? 'auto' : d,
      padding: extended ? '0 20px' : 0,
      border: 'none',
      borderRadius: radii[size],
      background: c.bg,
      color: c.fg,
      boxShadow: disabled ? 'none' : 'var(--md-sys-elevation-level3)',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.38 : 1,
      overflow: 'hidden',
      fontFamily: 'var(--md-sys-typescale-font)',
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '0.1px',
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: c.fg,
      opacity: stateOpacity,
      transition: 'opacity 0.1s',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: iconSizes[size],
      position: 'relative'
    }
  }, icon), extended && label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative'
    }
  }, label));
}
Object.assign(__ds_scope, { Fab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Fab.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Material 3 icon button — a 40px round button wrapping a single Material Symbol.
 * Variants: standard · filled · tonal · outlined. Optional toggle (filled glyph when selected).
 */
function IconButton({
  icon,
  variant = 'standard',
  selected = false,
  disabled = false,
  onClick,
  ariaLabel,
  style = {}
}) {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const schemes = {
    standard: {
      bg: 'transparent',
      fg: selected ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-on-surface-variant)',
      border: 'none'
    },
    filled: {
      bg: selected ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-surface-container-highest)',
      fg: selected ? 'var(--md-sys-color-on-primary)' : 'var(--md-sys-color-primary)',
      border: 'none'
    },
    tonal: {
      bg: selected ? 'var(--md-sys-color-secondary-container)' : 'var(--md-sys-color-surface-container-highest)',
      fg: 'var(--md-sys-color-on-secondary-container)',
      border: 'none'
    },
    outlined: {
      bg: selected ? 'var(--md-sys-color-inverse-surface)' : 'transparent',
      fg: selected ? 'var(--md-sys-color-inverse-on-surface)' : 'var(--md-sys-color-on-surface-variant)',
      border: selected ? 'none' : '1px solid var(--md-sys-color-outline)'
    }
  };
  const s = schemes[variant] || schemes.standard;
  const stateOpacity = pressed ? 0.12 : hover ? 0.08 : 0;
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": ariaLabel,
    "aria-pressed": selected,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      border: s.border,
      borderRadius: 'var(--md-sys-shape-corner-full)',
      background: s.bg,
      color: s.fg,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.38 : 1,
      overflow: 'hidden',
      padding: 0,
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: s.fg,
      opacity: disabled ? 0 : stateOpacity,
      transition: 'opacity 0.1s',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: 'material-symbols-outlined' + (selected ? ' filled' : ''),
    style: {
      fontSize: 24,
      position: 'relative'
    }
  }, icon));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/containment/Card.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Material 3 card. Variants: elevated | filled | outlined. 12px corners, 16px padding.
 * Set `interactive` for hover state layer + pointer.
 */
function Card({
  variant = 'elevated',
  interactive = false,
  onClick,
  children,
  style = {}
}) {
  const [hover, setHover] = useState(false);
  const schemes = {
    elevated: {
      bg: 'var(--md-sys-color-surface-container-low)',
      border: 'none',
      shadow: 'var(--md-sys-elevation-level1)'
    },
    filled: {
      bg: 'var(--md-sys-color-surface-container-highest)',
      border: 'none',
      shadow: 'none'
    },
    outlined: {
      bg: 'var(--md-sys-color-surface)',
      border: '1px solid var(--md-sys-color-outline-variant)',
      shadow: 'none'
    }
  };
  const s = schemes[variant] || schemes.elevated;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      borderRadius: 'var(--md-sys-shape-corner-medium)',
      background: s.bg,
      border: s.border,
      boxShadow: interactive && hover && variant === 'elevated' ? 'var(--md-sys-elevation-level2)' : s.shadow,
      padding: 16,
      color: 'var(--md-sys-color-on-surface)',
      fontFamily: 'var(--md-sys-typescale-font)',
      cursor: interactive ? 'pointer' : 'default',
      overflow: 'hidden',
      transition: 'box-shadow 0.2s var(--md-sys-motion-easing-standard)',
      ...style
    }
  }, interactive && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--md-sys-color-on-surface)',
      opacity: hover ? 0.08 : 0,
      transition: 'opacity 0.1s',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containment/Card.jsx", error: String((e && e.message) || e) }); }

// components/containment/Chip.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Material 3 chip. Kinds: assist | filter | input | suggestion.
 * 32px tall, 8px corners. Filter chips toggle (check + tonal fill when selected).
 * Input chips can show a trailing remove (×) via onRemove.
 */
function Chip({
  label,
  kind = 'assist',
  selected = false,
  icon,
  avatar,
  onClick,
  onRemove,
  disabled = false,
  style = {}
}) {
  const [hover, setHover] = useState(false);
  const isSelected = (kind === 'filter' || kind === 'input') && selected;
  const bg = isSelected ? 'var(--md-sys-color-secondary-container)' : 'transparent';
  const fg = isSelected ? 'var(--md-sys-color-on-secondary-container)' : 'var(--md-sys-color-on-surface-variant)';
  const border = isSelected ? 'none' : '1px solid var(--md-sys-color-outline)';
  const showLeading = isSelected ? kind === 'filter' : Boolean(icon || avatar);
  return /*#__PURE__*/React.createElement("div", {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 32,
      padding: avatar && !isSelected ? '0 16px 0 4px' : showLeading ? '0 16px 0 8px' : '0 16px',
      borderRadius: 'var(--md-sys-shape-corner-small)',
      background: bg,
      border,
      color: fg,
      fontFamily: 'var(--md-sys-typescale-font)',
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '0.1px',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.38 : 1,
      overflow: 'hidden',
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: fg,
      opacity: !disabled && hover ? 0.08 : 0,
      transition: 'opacity 0.1s',
      pointerEvents: 'none'
    }
  }), isSelected && kind === 'filter' && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 18,
      position: 'relative'
    }
  }, "check"), !isSelected && avatar && /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      position: 'relative'
    }
  }), !isSelected && !avatar && icon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 18,
      position: 'relative'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative'
    }
  }, label), kind === 'input' && onRemove && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      fontSize: 18,
      position: 'relative',
      marginRight: -8,
      cursor: 'pointer'
    }
  }, "close"));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containment/Chip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
/**
 * Material 3 badge. Small = 6px dot; large = pill with a number (caps at "999+").
 * Wrap a target (e.g. an icon) as children to anchor the badge top-right.
 */
function Badge({
  count,
  max = 999,
  dot = false,
  children,
  style = {}
}) {
  const showNumber = !dot && count !== undefined && count !== null;
  const display = showNumber ? count > max ? `${max}+` : String(count) : '';
  const large = showNumber;
  const badge = /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: large ? 16 : 6,
      height: large ? 16 : 6,
      padding: large ? '0 4px' : 0,
      borderRadius: 'var(--md-sys-shape-corner-full)',
      background: 'var(--md-sys-color-error)',
      color: 'var(--md-sys-color-on-error)',
      fontFamily: 'var(--md-sys-typescale-font)',
      fontSize: 11,
      fontWeight: 500,
      lineHeight: '16px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box'
    }
  }, display);
  if (!children) return badge;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: large ? -4 : 0,
      left: '60%'
    }
  }, badge));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Material 3 basic dialog. 28px corners, level-3 elevation, scrim behind.
 * Optional centered hero icon, headline, body content, and a right-aligned
 * action row (pass text Buttons as `actions`).
 */
function Dialog({
  open = true,
  icon,
  headline,
  children,
  actions,
  onClose,
  style = {}
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'color-mix(in srgb, var(--md-sys-color-scrim) 32%, transparent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      fontFamily: 'var(--md-sys-typescale-font)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      minWidth: 280,
      maxWidth: 560,
      background: 'var(--md-sys-color-surface-container-high)',
      color: 'var(--md-sys-color-on-surface)',
      borderRadius: 'var(--md-sys-shape-corner-extra-large)',
      boxShadow: 'var(--md-sys-elevation-level3)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 24,
      color: 'var(--md-sys-color-secondary)',
      alignSelf: 'center'
    }
  }, icon), headline && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 24,
      lineHeight: '32px',
      fontWeight: 400,
      textAlign: icon ? 'center' : 'left',
      color: 'var(--md-sys-color-on-surface)'
    }
  }, headline), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: '0.25px',
      color: 'var(--md-sys-color-on-surface-variant)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      marginTop: 8
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * Material 3 switch. The handle grows from 16px (off) to 24px (on); when on,
 * the track fills with primary. Optional check icon on the handle when selected.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  icons = false,
  ariaLabel,
  style = {}
}) {
  const toggle = () => {
    if (!disabled) onChange && onChange(!checked);
  };
  const trackBg = disabled ? checked ? 'var(--md-sys-color-on-surface)' : 'var(--md-sys-color-surface-container-highest)' : checked ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-surface-container-highest)';
  const trackBorder = checked ? 'transparent' : 'var(--md-sys-color-outline)';
  const handleBg = disabled ? checked ? 'var(--md-sys-color-surface)' : 'var(--md-sys-color-on-surface)' : checked ? 'var(--md-sys-color-on-primary)' : 'var(--md-sys-color-outline)';
  const handleSize = checked ? 24 : 16;
  return /*#__PURE__*/React.createElement("button", {
    role: "switch",
    "aria-checked": checked,
    "aria-label": ariaLabel,
    onClick: toggle,
    disabled: disabled,
    style: {
      position: 'relative',
      width: 52,
      height: 32,
      flex: 'none',
      borderRadius: 'var(--md-sys-shape-corner-full)',
      background: trackBg,
      border: `2px solid ${trackBorder}`,
      boxSizing: 'border-box',
      cursor: disabled ? 'default' : 'pointer',
      padding: 0,
      opacity: disabled ? 0.38 : 1,
      transition: 'background 0.2s var(--md-sys-motion-easing-standard)',
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50%',
      left: checked ? `calc(100% - ${handleSize}px - 4px)` : 6,
      width: handleSize,
      height: handleSize,
      transform: 'translateY(-50%)',
      borderRadius: '50%',
      background: handleBg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s var(--md-sys-motion-easing-emphasized)'
    }
  }, icons && checked && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 16,
      color: 'var(--md-sys-color-on-primary-container)'
    }
  }, "check")));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
const {
  useState,
  useId
} = React;
/**
 * Material 3 text field. Variants: filled (default) | outlined.
 * Floating label, optional leading/trailing icon, supporting text, error state.
 */
function TextField({
  variant = 'filled',
  label,
  value,
  defaultValue,
  onChange,
  placeholder,
  type = 'text',
  leadingIcon,
  trailingIcon,
  supportingText,
  error = false,
  disabled = false,
  style = {}
}) {
  const id = useId();
  const [focused, setFocused] = useState(false);
  const [internal, setInternal] = useState(defaultValue || '');
  const val = value !== undefined ? value : internal;
  const hasValue = val !== undefined && val !== null && String(val).length > 0;
  const floated = focused || hasValue || Boolean(placeholder);
  const accent = error ? 'var(--md-sys-color-error)' : focused ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-on-surface-variant)';
  const outlined = variant === 'outlined';
  const handle = e => {
    if (value === undefined) setInternal(e.target.value);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'var(--md-sys-typescale-font)',
      opacity: disabled ? 0.38 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      height: 56,
      padding: '0 16px',
      background: outlined ? 'transparent' : 'var(--md-sys-color-surface-container-highest)',
      borderRadius: outlined ? 'var(--md-sys-shape-corner-extra-small)' : 'var(--md-sys-shape-corner-extra-small) var(--md-sys-shape-corner-extra-small) 0 0',
      border: outlined ? `${focused ? 2 : 1}px solid ${error ? 'var(--md-sys-color-error)' : focused ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-outline)'}` : 'none',
      borderBottom: outlined ? undefined : `${focused ? 2 : 1}px solid ${accent}`,
      boxSizing: 'border-box'
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      color: 'var(--md-sys-color-on-surface-variant)',
      fontSize: 24
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      height: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      position: 'absolute',
      left: 0,
      pointerEvents: 'none',
      color: accent,
      transition: 'all 0.15s var(--md-sys-motion-easing-standard)',
      top: floated ? outlined ? -8 : 8 : '50%',
      transform: floated ? 'translateY(0)' : 'translateY(-50%)',
      fontSize: floated ? 12 : 16,
      background: outlined && floated ? 'var(--md-sys-color-surface)' : 'transparent',
      padding: outlined && floated ? '0 4px' : 0,
      marginLeft: outlined && floated ? -4 : 0
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: type,
    value: val,
    placeholder: focused || !label ? placeholder : '',
    disabled: disabled,
    onChange: handle,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: 'var(--md-sys-color-on-surface)',
      fontFamily: 'inherit',
      fontSize: 16,
      letterSpacing: '0.5px',
      padding: 0,
      position: 'absolute',
      bottom: label ? 8 : '50%',
      transform: label ? 'none' : 'translateY(50%)'
    }
  })), trailingIcon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      color: error ? 'var(--md-sys-color-error)' : 'var(--md-sys-color-on-surface-variant)',
      fontSize: 24
    }
  }, trailingIcon)), supportingText && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: '0.4px',
      padding: '0 16px',
      color: error ? 'var(--md-sys-color-error)' : 'var(--md-sys-color-on-surface-variant)'
    }
  }, supportingText));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavigationBar.jsx
try { (() => {
/**
 * Material 3 navigation bar — bottom nav, 3–5 destinations.
 * Each item: { icon, label, badge? }. Selected item shows a tonal pill behind
 * the (filled) icon. 80px tall, surface-container background.
 */
function NavigationBar({
  items = [],
  value = 0,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      height: 80,
      background: 'var(--md-sys-color-surface-container)',
      fontFamily: 'var(--md-sys-typescale-font)',
      ...style
    }
  }, items.map((item, i) => {
    const active = i === value;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => onChange && onChange(i),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        padding: '12px 0 16px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 64,
        height: 32
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        borderRadius: 'var(--md-sys-shape-corner-full)',
        background: active ? 'var(--md-sys-color-secondary-container)' : 'transparent',
        transition: 'background 0.15s var(--md-sys-motion-easing-standard)'
      }
    }), item.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: -2,
        left: 36,
        minWidth: typeof item.badge === 'number' ? 16 : 6,
        height: typeof item.badge === 'number' ? 16 : 6,
        padding: typeof item.badge === 'number' ? '0 4px' : 0,
        borderRadius: 'var(--md-sys-shape-corner-full)',
        background: 'var(--md-sys-color-error)',
        color: 'var(--md-sys-color-on-error)',
        fontSize: 11,
        fontWeight: 500,
        lineHeight: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box'
      }
    }, typeof item.badge === 'number' ? item.badge : ''), /*#__PURE__*/React.createElement("span", {
      className: 'material-symbols-outlined' + (active ? ' filled' : ''),
      style: {
        fontSize: 24,
        position: 'relative',
        color: active ? 'var(--md-sys-color-on-secondary-container)' : 'var(--md-sys-color-on-surface-variant)'
      }
    }, item.icon)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: active ? 700 : 500,
        letterSpacing: '0.5px',
        color: active ? 'var(--md-sys-color-on-surface)' : 'var(--md-sys-color-on-surface-variant)'
      }
    }, item.label));
  }));
}
Object.assign(__ds_scope, { NavigationBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationBar.jsx", error: String((e && e.message) || e) }); }

// m3.jsx
try { (() => {
/* Material Design 3 — self-contained runtime build of the component library.
   Mirrors the source in components/*.jsx so cards and the UI kit render in any
   environment (the auto-generated _ds_bundle.js is only present in the Design
   System tab). Load via <script type="text/babel" src="m3.jsx"> after React.
   Exposes window.M3 = { Button, IconButton, Fab, Card, Chip, TextField,
   Switch, Badge, NavigationBar, Dialog }. */
(function () {
  const {
    useState,
    useId
  } = React;
  function Button({
    variant = 'filled',
    icon,
    iconPosition = 'leading',
    disabled = false,
    onClick,
    type = 'button',
    children,
    style = {}
  }) {
    const [hover, setHover] = useState(false);
    const [pressed, setPressed] = useState(false);
    const schemes = {
      filled: {
        bg: 'var(--md-sys-color-primary)',
        fg: 'var(--md-sys-color-on-primary)',
        border: 'none',
        shadow: 'none'
      },
      tonal: {
        bg: 'var(--md-sys-color-secondary-container)',
        fg: 'var(--md-sys-color-on-secondary-container)',
        border: 'none',
        shadow: 'none'
      },
      elevated: {
        bg: 'var(--md-sys-color-surface-container-low)',
        fg: 'var(--md-sys-color-primary)',
        border: 'none',
        shadow: 'var(--md-sys-elevation-level1)'
      },
      outlined: {
        bg: 'transparent',
        fg: 'var(--md-sys-color-primary)',
        border: '1px solid var(--md-sys-color-outline)',
        shadow: 'none'
      },
      text: {
        bg: 'transparent',
        fg: 'var(--md-sys-color-primary)',
        border: 'none',
        shadow: 'none'
      }
    };
    const s = schemes[variant] || schemes.filled;
    const stateOpacity = pressed ? 0.12 : hover ? 0.08 : 0;
    const hasIcon = Boolean(icon);
    const padH = variant === 'text' ? 12 : 24;
    return /*#__PURE__*/React.createElement("button", {
      type: type,
      onClick: disabled ? undefined : onClick,
      disabled: disabled,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => {
        setHover(false);
        setPressed(false);
      },
      onMouseDown: () => setPressed(true),
      onMouseUp: () => setPressed(false),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: iconPosition === 'trailing' ? 'row-reverse' : 'row',
        gap: 8,
        height: 40,
        padding: hasIcon ? iconPosition === 'trailing' ? `0 ${padH}px 0 24px` : `0 24px 0 16px` : `0 ${padH}px`,
        minWidth: 48,
        border: s.border,
        borderRadius: 'var(--md-sys-shape-corner-full)',
        background: s.bg,
        color: s.fg,
        boxShadow: disabled ? 'none' : s.shadow,
        fontFamily: 'var(--md-sys-typescale-font)',
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: '0.1px',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.38 : 1,
        overflow: 'hidden',
        transition: 'box-shadow 0.2s var(--md-sys-motion-easing-standard)',
        WebkitTapHighlightColor: 'transparent',
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        background: s.fg,
        opacity: disabled ? 0 : stateOpacity,
        transition: 'opacity 0.1s',
        pointerEvents: 'none'
      }
    }), hasIcon && /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined",
      style: {
        fontSize: 18,
        position: 'relative'
      }
    }, icon), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative'
      }
    }, children));
  }
  function IconButton({
    icon,
    variant = 'standard',
    selected = false,
    disabled = false,
    onClick,
    ariaLabel,
    style = {}
  }) {
    const [hover, setHover] = useState(false);
    const [pressed, setPressed] = useState(false);
    const schemes = {
      standard: {
        bg: 'transparent',
        fg: selected ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-on-surface-variant)',
        border: 'none'
      },
      filled: {
        bg: selected ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-surface-container-highest)',
        fg: selected ? 'var(--md-sys-color-on-primary)' : 'var(--md-sys-color-primary)',
        border: 'none'
      },
      tonal: {
        bg: selected ? 'var(--md-sys-color-secondary-container)' : 'var(--md-sys-color-surface-container-highest)',
        fg: 'var(--md-sys-color-on-secondary-container)',
        border: 'none'
      },
      outlined: {
        bg: selected ? 'var(--md-sys-color-inverse-surface)' : 'transparent',
        fg: selected ? 'var(--md-sys-color-inverse-on-surface)' : 'var(--md-sys-color-on-surface-variant)',
        border: selected ? 'none' : '1px solid var(--md-sys-color-outline)'
      }
    };
    const s = schemes[variant] || schemes.standard;
    const stateOpacity = pressed ? 0.12 : hover ? 0.08 : 0;
    return /*#__PURE__*/React.createElement("button", {
      "aria-label": ariaLabel,
      "aria-pressed": selected,
      onClick: disabled ? undefined : onClick,
      disabled: disabled,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => {
        setHover(false);
        setPressed(false);
      },
      onMouseDown: () => setPressed(true),
      onMouseUp: () => setPressed(false),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        border: s.border,
        borderRadius: 'var(--md-sys-shape-corner-full)',
        background: s.bg,
        color: s.fg,
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.38 : 1,
        overflow: 'hidden',
        padding: 0,
        WebkitTapHighlightColor: 'transparent',
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        background: s.fg,
        opacity: disabled ? 0 : stateOpacity,
        transition: 'opacity 0.1s',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: 'material-symbols-outlined' + (selected ? ' filled' : ''),
      style: {
        fontSize: 24,
        position: 'relative'
      }
    }, icon));
  }
  function Fab({
    icon,
    label,
    size = 'regular',
    color = 'primary',
    extended = false,
    disabled = false,
    onClick,
    ariaLabel,
    style = {}
  }) {
    const [hover, setHover] = useState(false);
    const [pressed, setPressed] = useState(false);
    const colors = {
      primary: {
        bg: 'var(--md-sys-color-primary-container)',
        fg: 'var(--md-sys-color-on-primary-container)'
      },
      secondary: {
        bg: 'var(--md-sys-color-secondary-container)',
        fg: 'var(--md-sys-color-on-secondary-container)'
      },
      tertiary: {
        bg: 'var(--md-sys-color-tertiary-container)',
        fg: 'var(--md-sys-color-on-tertiary-container)'
      },
      surface: {
        bg: 'var(--md-sys-color-surface-container-high)',
        fg: 'var(--md-sys-color-primary)'
      }
    };
    const c = colors[color] || colors.primary;
    const dims = {
      small: 40,
      regular: 56,
      large: 96
    };
    const radii = {
      small: 'var(--md-sys-shape-corner-medium)',
      regular: 'var(--md-sys-shape-corner-large)',
      large: 'var(--md-sys-shape-corner-extra-large)'
    };
    const iconSizes = {
      small: 24,
      regular: 24,
      large: 36
    };
    const d = dims[size];
    const stateOpacity = pressed ? 0.12 : hover ? 0.08 : 0;
    return /*#__PURE__*/React.createElement("button", {
      "aria-label": ariaLabel || label,
      onClick: disabled ? undefined : onClick,
      disabled: disabled,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => {
        setHover(false);
        setPressed(false);
      },
      onMouseDown: () => setPressed(true),
      onMouseUp: () => setPressed(false),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        height: d,
        width: extended ? 'auto' : d,
        padding: extended ? '0 20px' : 0,
        border: 'none',
        borderRadius: radii[size],
        background: c.bg,
        color: c.fg,
        boxShadow: disabled ? 'none' : 'var(--md-sys-elevation-level3)',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.38 : 1,
        overflow: 'hidden',
        fontFamily: 'var(--md-sys-typescale-font)',
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: '0.1px',
        WebkitTapHighlightColor: 'transparent',
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        background: c.fg,
        opacity: stateOpacity,
        transition: 'opacity 0.1s',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined",
      style: {
        fontSize: iconSizes[size],
        position: 'relative'
      }
    }, icon), extended && label && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative'
      }
    }, label));
  }
  function TextField({
    variant = 'filled',
    label,
    value,
    defaultValue,
    onChange,
    placeholder,
    type = 'text',
    leadingIcon,
    trailingIcon,
    supportingText,
    error = false,
    disabled = false,
    style = {}
  }) {
    const id = useId();
    const [focused, setFocused] = useState(false);
    const [internal, setInternal] = useState(defaultValue || '');
    const val = value !== undefined ? value : internal;
    const hasValue = val !== undefined && val !== null && String(val).length > 0;
    const floated = focused || hasValue || Boolean(placeholder);
    const accent = error ? 'var(--md-sys-color-error)' : focused ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-on-surface-variant)';
    const outlined = variant === 'outlined';
    const handle = e => {
      if (value === undefined) setInternal(e.target.value);
      onChange && onChange(e);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        flexDirection: 'column',
        gap: 4,
        fontFamily: 'var(--md-sys-typescale-font)',
        opacity: disabled ? 0.38 : 1,
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        height: 56,
        padding: '0 16px',
        background: outlined ? 'transparent' : 'var(--md-sys-color-surface-container-highest)',
        borderRadius: outlined ? 'var(--md-sys-shape-corner-extra-small)' : 'var(--md-sys-shape-corner-extra-small) var(--md-sys-shape-corner-extra-small) 0 0',
        border: outlined ? `${focused ? 2 : 1}px solid ${error ? 'var(--md-sys-color-error)' : focused ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-outline)'}` : 'none',
        borderBottom: outlined ? undefined : `${focused ? 2 : 1}px solid ${accent}`,
        boxSizing: 'border-box'
      }
    }, leadingIcon && /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined",
      style: {
        color: 'var(--md-sys-color-on-surface-variant)',
        fontSize: 24
      }
    }, leadingIcon), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        flex: 1,
        height: '100%'
      }
    }, label && /*#__PURE__*/React.createElement("label", {
      htmlFor: id,
      style: {
        position: 'absolute',
        left: 0,
        pointerEvents: 'none',
        color: accent,
        transition: 'all 0.15s var(--md-sys-motion-easing-standard)',
        top: floated ? outlined ? -8 : 8 : '50%',
        transform: floated ? 'translateY(0)' : 'translateY(-50%)',
        fontSize: floated ? 12 : 16,
        background: outlined && floated ? 'var(--md-sys-color-surface)' : 'transparent',
        padding: outlined && floated ? '0 4px' : 0,
        marginLeft: outlined && floated ? -4 : 0
      }
    }, label), /*#__PURE__*/React.createElement("input", {
      id: id,
      type: type,
      value: val,
      placeholder: focused || !label ? placeholder : '',
      disabled: disabled,
      onChange: handle,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      style: {
        width: '100%',
        border: 'none',
        outline: 'none',
        background: 'transparent',
        color: 'var(--md-sys-color-on-surface)',
        fontFamily: 'inherit',
        fontSize: 16,
        letterSpacing: '0.5px',
        padding: 0,
        position: 'absolute',
        bottom: label ? 8 : '50%',
        transform: label ? 'none' : 'translateY(50%)'
      }
    })), trailingIcon && /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined",
      style: {
        color: error ? 'var(--md-sys-color-error)' : 'var(--md-sys-color-on-surface-variant)',
        fontSize: 24
      }
    }, trailingIcon)), supportingText && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        letterSpacing: '0.4px',
        padding: '0 16px',
        color: error ? 'var(--md-sys-color-error)' : 'var(--md-sys-color-on-surface-variant)'
      }
    }, supportingText));
  }
  function Switch({
    checked = false,
    onChange,
    disabled = false,
    icons = false,
    ariaLabel,
    style = {}
  }) {
    const toggle = () => {
      if (!disabled) onChange && onChange(!checked);
    };
    const trackBg = disabled ? checked ? 'var(--md-sys-color-on-surface)' : 'var(--md-sys-color-surface-container-highest)' : checked ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-surface-container-highest)';
    const trackBorder = checked ? 'transparent' : 'var(--md-sys-color-outline)';
    const handleBg = disabled ? checked ? 'var(--md-sys-color-surface)' : 'var(--md-sys-color-on-surface)' : checked ? 'var(--md-sys-color-on-primary)' : 'var(--md-sys-color-outline)';
    const handleSize = checked ? 24 : 16;
    return /*#__PURE__*/React.createElement("button", {
      role: "switch",
      "aria-checked": checked,
      "aria-label": ariaLabel,
      onClick: toggle,
      disabled: disabled,
      style: {
        position: 'relative',
        width: 52,
        height: 32,
        flex: 'none',
        borderRadius: 'var(--md-sys-shape-corner-full)',
        background: trackBg,
        border: `2px solid ${trackBorder}`,
        boxSizing: 'border-box',
        cursor: disabled ? 'default' : 'pointer',
        padding: 0,
        opacity: disabled ? 0.38 : 1,
        transition: 'background 0.2s var(--md-sys-motion-easing-standard)',
        WebkitTapHighlightColor: 'transparent',
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: '50%',
        left: checked ? `calc(100% - ${handleSize}px - 4px)` : 6,
        width: handleSize,
        height: handleSize,
        transform: 'translateY(-50%)',
        borderRadius: '50%',
        background: handleBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s var(--md-sys-motion-easing-emphasized)'
      }
    }, icons && checked && /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined",
      style: {
        fontSize: 16,
        color: 'var(--md-sys-color-on-primary-container)'
      }
    }, "check")));
  }
  function Card({
    variant = 'elevated',
    interactive = false,
    onClick,
    children,
    style = {}
  }) {
    const [hover, setHover] = useState(false);
    const schemes = {
      elevated: {
        bg: 'var(--md-sys-color-surface-container-low)',
        border: 'none',
        shadow: 'var(--md-sys-elevation-level1)'
      },
      filled: {
        bg: 'var(--md-sys-color-surface-container-highest)',
        border: 'none',
        shadow: 'none'
      },
      outlined: {
        bg: 'var(--md-sys-color-surface)',
        border: '1px solid var(--md-sys-color-outline-variant)',
        shadow: 'none'
      }
    };
    const s = schemes[variant] || schemes.elevated;
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        position: 'relative',
        borderRadius: 'var(--md-sys-shape-corner-medium)',
        background: s.bg,
        border: s.border,
        boxShadow: interactive && hover && variant === 'elevated' ? 'var(--md-sys-elevation-level2)' : s.shadow,
        padding: 16,
        color: 'var(--md-sys-color-on-surface)',
        fontFamily: 'var(--md-sys-typescale-font)',
        cursor: interactive ? 'pointer' : 'default',
        overflow: 'hidden',
        transition: 'box-shadow 0.2s var(--md-sys-motion-easing-standard)',
        ...style
      }
    }, interactive && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--md-sys-color-on-surface)',
        opacity: hover ? 0.08 : 0,
        transition: 'opacity 0.1s',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, children));
  }
  function Chip({
    label,
    kind = 'assist',
    selected = false,
    icon,
    avatar,
    onClick,
    onRemove,
    disabled = false,
    style = {}
  }) {
    const [hover, setHover] = useState(false);
    const isSelected = (kind === 'filter' || kind === 'input') && selected;
    const bg = isSelected ? 'var(--md-sys-color-secondary-container)' : 'transparent';
    const fg = isSelected ? 'var(--md-sys-color-on-secondary-container)' : 'var(--md-sys-color-on-surface-variant)';
    const border = isSelected ? 'none' : '1px solid var(--md-sys-color-outline)';
    const showLeading = isSelected ? kind === 'filter' : Boolean(icon || avatar);
    return /*#__PURE__*/React.createElement("div", {
      onClick: disabled ? undefined : onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        height: 32,
        padding: avatar && !isSelected ? '0 16px 0 4px' : showLeading ? '0 16px 0 8px' : '0 16px',
        borderRadius: 'var(--md-sys-shape-corner-small)',
        background: bg,
        border,
        color: fg,
        fontFamily: 'var(--md-sys-typescale-font)',
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: '0.1px',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.38 : 1,
        overflow: 'hidden',
        boxSizing: 'border-box',
        WebkitTapHighlightColor: 'transparent',
        flex: 'none',
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        background: fg,
        opacity: !disabled && hover ? 0.08 : 0,
        transition: 'opacity 0.1s',
        pointerEvents: 'none'
      }
    }), isSelected && kind === 'filter' && /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined",
      style: {
        fontSize: 18,
        position: 'relative'
      }
    }, "check"), !isSelected && avatar && /*#__PURE__*/React.createElement("img", {
      src: avatar,
      alt: "",
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        position: 'relative'
      }
    }), !isSelected && !avatar && icon && /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined",
      style: {
        fontSize: 18,
        position: 'relative'
      }
    }, icon), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative'
      }
    }, label), kind === 'input' && onRemove && /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined",
      onClick: e => {
        e.stopPropagation();
        onRemove();
      },
      style: {
        fontSize: 18,
        position: 'relative',
        marginRight: -8,
        cursor: 'pointer'
      }
    }, "close"));
  }
  function Badge({
    count,
    max = 999,
    dot = false,
    children,
    style = {}
  }) {
    const showNumber = !dot && count !== undefined && count !== null;
    const display = showNumber ? count > max ? `${max}+` : String(count) : '';
    const large = showNumber;
    const badge = /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: large ? 16 : 6,
        height: large ? 16 : 6,
        padding: large ? '0 4px' : 0,
        borderRadius: 'var(--md-sys-shape-corner-full)',
        background: 'var(--md-sys-color-error)',
        color: 'var(--md-sys-color-on-error)',
        fontFamily: 'var(--md-sys-typescale-font)',
        fontSize: 11,
        fontWeight: 500,
        lineHeight: '16px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box'
      }
    }, display);
    if (!children) return badge;
    return /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        display: 'inline-flex',
        ...style
      }
    }, children, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: large ? -4 : 0,
        left: '60%'
      }
    }, badge));
  }
  function Dialog({
    open = true,
    icon,
    headline,
    children,
    actions,
    onClose,
    style = {}
  }) {
    if (!open) return null;
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'absolute',
        inset: 0,
        background: 'color-mix(in srgb, var(--md-sys-color-scrim) 32%, transparent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        fontFamily: 'var(--md-sys-typescale-font)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: {
        minWidth: 280,
        maxWidth: 'calc(100% - 48px)',
        background: 'var(--md-sys-color-surface-container-high)',
        color: 'var(--md-sys-color-on-surface)',
        borderRadius: 'var(--md-sys-shape-corner-extra-large)',
        boxShadow: 'var(--md-sys-elevation-level3)',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        ...style
      }
    }, icon && /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined",
      style: {
        fontSize: 24,
        color: 'var(--md-sys-color-secondary)',
        alignSelf: 'center'
      }
    }, icon), headline && /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        lineHeight: '32px',
        fontWeight: 400,
        textAlign: icon ? 'center' : 'left',
        color: 'var(--md-sys-color-on-surface)'
      }
    }, headline), children && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        lineHeight: '20px',
        letterSpacing: '0.25px',
        color: 'var(--md-sys-color-on-surface-variant)'
      }
    }, children), actions && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 8,
        marginTop: 8
      }
    }, actions)));
  }
  function NavigationBar({
    items = [],
    value = 0,
    onChange,
    style = {}
  }) {
    return /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        height: 80,
        background: 'var(--md-sys-color-surface-container)',
        fontFamily: 'var(--md-sys-typescale-font)',
        ...style
      }
    }, items.map((item, i) => {
      const active = i === value;
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        onClick: () => onChange && onChange(i),
        style: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          padding: '12px 0 16px',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          WebkitTapHighlightColor: 'transparent'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 64,
          height: 32
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'absolute',
          inset: 0,
          borderRadius: 'var(--md-sys-shape-corner-full)',
          background: active ? 'var(--md-sys-color-secondary-container)' : 'transparent',
          transition: 'background 0.15s var(--md-sys-motion-easing-standard)'
        }
      }), item.badge != null && /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'absolute',
          top: -2,
          left: 36,
          minWidth: typeof item.badge === 'number' ? 16 : 6,
          height: typeof item.badge === 'number' ? 16 : 6,
          padding: typeof item.badge === 'number' ? '0 4px' : 0,
          borderRadius: 'var(--md-sys-shape-corner-full)',
          background: 'var(--md-sys-color-error)',
          color: 'var(--md-sys-color-on-error)',
          fontSize: 11,
          fontWeight: 500,
          lineHeight: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box'
        }
      }, typeof item.badge === 'number' ? item.badge : ''), /*#__PURE__*/React.createElement("span", {
        className: 'material-symbols-outlined' + (active ? ' filled' : ''),
        style: {
          fontSize: 24,
          position: 'relative',
          color: active ? 'var(--md-sys-color-on-secondary-container)' : 'var(--md-sys-color-on-surface-variant)'
        }
      }, item.icon)), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12,
          fontWeight: active ? 700 : 500,
          letterSpacing: '0.5px',
          color: active ? 'var(--md-sys-color-on-surface)' : 'var(--md-sys-color-on-surface-variant)'
        }
      }, item.label));
    }));
  }
  window.M3 = {
    Button,
    IconButton,
    Fab,
    TextField,
    Switch,
    Card,
    Chip,
    Badge,
    Dialog,
    NavigationBar
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "m3.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Fab = __ds_scope.Fab;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.NavigationBar = __ds_scope.NavigationBar;

})();

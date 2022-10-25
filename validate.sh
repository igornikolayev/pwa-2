yarn concurrently \
  --kill-others-on-fail \
  --prefix "[{name}]" \
  --names "lint,lint:i18n,prettier:check,prettier:fix, prettier" \
  --prefix-colors "bgGreen.bold.white,bgGreen.bold.white" \
    "yarn run lint" \
    "yarn prettier" \
    "yarn prettier:fix" \
    "yarn run lint:i18n" \
    "yarn run prettier:check"

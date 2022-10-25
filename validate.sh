yarn concurrently \
  --kill-others-on-fail \
  --prefix "[{name}]" \
  --names "lint,lint:i18n,prettier:check" \
  --prefix-colors "bgGreen.bold.white,bgGreen.bold.white" \
    "yarn run lint" \
    "yarn run lint:i18n" \
    "yarn run prettier:check"

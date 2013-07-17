# validate-wercker-box

Validates wercker-box.yml used for creating steps. The schema is publicly available at [wercker-box-schema.json](https://github.com/wercker/step-validate-wercker-box/blob/master/wercker-box-schema.json).

The steps looks for a `wercker-box.yml` file in the `$WERCKER_SOURCE_DIR` and fails if not present, or not valid.

## Options
none


## Dependencies
Node.js 0.6 or higher

## Example

``` yaml
- validate-wercker-box
```

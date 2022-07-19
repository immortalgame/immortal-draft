# Immortal Draft

## Usage

```sh
yarn
```

then

```sh
yarn start <NUMBER_OF_PACKS> <SEED> <OUTPUT_FILE_PATH>
```

The seed argument will be the [sha256](https://emn178.github.io/online-tools/sha256.html) of the hash of the [ethereum block n°15176000](https://etherscan.io/block/countdown/15176000) concatenated with the Guild's domain name lowercased.

Example with the [block n°15173908](https://etherscan.io/block/15173908)  : 
```
sha256(0x4e98eea20af4e180c5ac8b6788043843b8ab632ab67d7700acd5c6be42669e1bimmortal.game)

SEED = f7a5eb98ca8e9c6f2a48f603295e4a8e31e178442c0607103105d6320ab1e560
```

export default function useAssets(asset) {
  const assets = import.meta.glob('/assets/*/*/*', {eager: true});

  const getAssetUrl = () => {
   if (assets[asset]) {
     return assets[asset].default
   }
  }

  return getAssetUrl()
}


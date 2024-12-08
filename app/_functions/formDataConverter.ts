export function convertSingleFileModelToFormData(
  model: any,
  fileAttributeName: string = 'file',
): FormData {
  if (!model.hasOwnProperty(fileAttributeName))
    throw `Can't convert object to FormData! Your model does not have a ${fileAttributeName} property!`;

  const formData = new FormData();
  for (var key in model) {
    if (key === fileAttributeName) {
      const fileType = model[fileAttributeName].constructor.name;
      switch (fileType) {
        case 'FileList':
          formData.append(key, model[fileAttributeName][0]);
          break;
        case 'File':
          formData.append(key, model[fileAttributeName]);
          break;
      }
    } else if (model[key]) {
      formData.append(key, model[key]);
    }
  }
  return formData;
}

export function convertMultiFileModelToFormData(
  model: any,
  fileAttributeNames: string[],
): FormData {
  fileAttributeNames.forEach((name: string) => {
    if (!model.hasOwnProperty(name))
      throw `Can't convert object to FormData! Your model does not have a ${name} property!`;
  });

  const formData = new FormData();
  for (var key in model) {
    if (fileAttributeNames.includes(key)) {
      formData.append(key, model[key][0]);
    } else if (model[key]) {
      formData.append(key, model[key]);
    }
  }
  return formData;
}

export function convertModelToFormData(model: any): FormData {
  const formData = new FormData();
  const modelProperties: string[] = Object.keys(model);
  modelProperties.forEach((property: string) =>
    formData.append(property, model[property]),
  );
  return formData;
}

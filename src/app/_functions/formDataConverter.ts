/* eslint-disable no-prototype-builtins */
export function convertSingleFileModelToFormData<T extends object>(
  model: T,
  fileAttributeName = 'file',
): FormData {
  if (!model.hasOwnProperty(fileAttributeName)) {
    throw new Error(
      `Can't convert object to FormData! Your model does not have a ${fileAttributeName} property!`,
    );
  }

  const formData = new FormData();
  for (const key in model) {
    if (key === fileAttributeName) {
      const fileType = (model[fileAttributeName as keyof T] as object)
        .constructor.name;
      switch (fileType) {
        case 'FileList':
          formData.append(
            key,
            (model[fileAttributeName as keyof T] as FileList)[0],
          );
          break;
        case 'File':
          formData.append(key, model[fileAttributeName as keyof T] as File);
          break;
      }
    } else if (model[key]) {
      formData.append(key, model[key] as string);
    }
  }
  return formData;
}

export function convertMultiFileModelToFormData<T extends object>(
  model: T,
  fileAttributeNames: string[],
): FormData {
  fileAttributeNames.forEach((name: string) => {
    if (!model.hasOwnProperty(name))
      throw `Can't convert object to FormData! Your model does not have a ${name} property!`;
  });

  const formData = new FormData();
  for (const key in model) {
    if (fileAttributeNames.includes(key)) {
      formData.append(key, (model[key] as FileList)[0]);
    } else if (model[key]) {
      formData.append(key, model[key] as string);
    }
  }
  return formData;
}

export function convertModelToFormData<T extends object>(model: T): FormData {
  const formData = new FormData();
  const modelProperties = Object.keys(model) as (keyof T)[];
  modelProperties.forEach((property) =>
    formData.append(property as string, model[property] as string | Blob),
  );
  return formData;
}

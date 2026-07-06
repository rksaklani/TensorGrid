const SELECT_DATASET_CODE = `import tensorgrid as tg

# Name of an existing dataset
name = "quickstart"

dataset = tg.load_dataset(name)

# Launch a new App session
session = tg.launch_app(dataset)

# If you already have an active App session
# session.dataset = dataset`;

const ADD_SAMPLE_CODE = `import tensorgrid as tg

dataset = tg.load_dataset("$CURRENT_DATASET_NAME")

samples = []
for filepath, label in zip(filepaths, labels):
    sample = tg.Sample(filepath=filepath)
    sample["ground_truth"] = tg.Classification(label=label)
    samples.append(sample)

dataset.add_samples(samples)`;

const ADD_DATASET_CODE = `import tensorgrid as tg

# A name for the dataset
name = "my-dataset"

# The directory containing the data to import
dataset_dir = "/path/to/data"

# The type of data being imported
dataset_type = tg.types.COCODetectionDataset

dataset = tg.Dataset.from_dir(
    dataset_dir=dataset_dir,
    dataset_type=dataset_type,
    name=name,
)`;

export const CONTENT_BY_MODE = {
  SELECT_DATASET: {
    title: "No dataset selected",
    code: SELECT_DATASET_CODE,
    subtitle: "Select a dataset with dataset selector above or",
    codeTitle: "Select a dataset with code",
    codeSubtitle:
      "Use Python or command line tools to set dataset for the current session",
    learnMoreLink: "https://docs.voxel51.com/user_guide/app.html",
    learnMoreLabel: "about using the TensorGrid App",
  },
  ADD_SAMPLE: {
    title: "No samples yet",
    code: ADD_SAMPLE_CODE,
    subtitle: "Add samples to this dataset with code or",
    codeTitle: "Add samples with code",
    codeSubtitle:
      "Use Python or command line tools to add sample to this dataset",
    learnMoreLink:
      "https://docs.voxel51.com/user_guide/dataset_creation/index.html#custom-formats",
    learnMoreLabel: "about loading data into TensorGrid",
  },
  ADD_DATASET: {
    title: "No datasets yet",
    code: ADD_DATASET_CODE,
    subtitle: "Add a dataset to TensorGrid with code or",
    codeTitle: "Create dataset with code",
    codeSubtitle: "Use Python or command line tools to add dataset to TensorGrid",
    learnMoreLink:
      "https://docs.voxel51.com/user_guide/dataset_creation/index.html",
    learnMoreLabel: "about loading data into TensorGrid",
  },
};

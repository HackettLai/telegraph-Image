/*!
 * FileInput Chinese Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 * @author kangqf <kangqingfei@gmail.com>
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function (factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof module === "object" && typeof module.exports === "object") {
    factory(require("jquery"));
  } else {
    factory(window.jQuery);
  }
})(function ($) {
  "use strict";

  $.fn.fileinputLocales["zh"] = {
    sizeUnits: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    bitRateUnits: [
      "B/s",
      "KB/s",
      "MB/s",
      "GB/s",
      "TB/s",
      "PB/s",
      "EB/s",
      "ZB/s",
      "YB/s",
    ],
    fileSingle: "File",
    filePlural: "File(s)",
    browseLabel: "Select &hellip;",
    removeLabel: "Remove",
    removeTitle: "Remove selected files",
    cancelLabel: "Cancel",
    cancelTitle: "Cancel ongoing uploads",
    pauseLabel: "Pause",
    pauseTitle: "Pause upload",
    uploadLabel: "Upload",
    uploadTitle: "Upload selected files",
    msgNo: "No",
    msgNoFilesSelected: "No file selected",
    msgPaused: "Paused",
    msgCancelled: "Canceled",
    msgPlaceholder: "Select {files} ...",
    msgZoomModalHeading: "Detailed preview",
    msgFileRequired: "Must select a file to upload.",
    msgSizeTooSmall:
      'File "{name}" (<b>{size}</b>) must be larger than the limit size of <b>{minSize}</b>.',
    msgSizeTooLarge:
      'File "{name}" (<b>{size}</b>) exceeds allowable size of <b>{maxSize}</b>.',
    msgFilesTooLess: "You must choose at least <b>{n}</b> {files} to upload. ",
    msgFilesTooMany:
      "The number of selected file: <b>({n})</b> exceed the maximum file limit: <b>{m}</b>.",
    msgTotalFilesTooMany:
      "You can upload up to <b>{m}</b> files (Currently there are <b>{n}</b> files).",
    msgFileNotFound: 'File "{name}" not found!',
    msgFileSecured:
      'Security restrictions, in order to prevent the reading of files "{name}".',
    msgFileNotReadable: 'File "{name}" unreadable.',
    msgFilePreviewAborted: '"{name}" preview aborted.',
    msgFilePreviewError: 'There was an error reading "{name}".',
    msgInvalidFileName: 'The filename "{name}" contains illegal characters.',
    msgInvalidFileType:
      'Incorrect type "{name}". Only files of type "{types}" are supported.',
    msgInvalidFileExtension:
      'Incorrect file extension "{name}". Only "{extensions}" file extensions are supported.',
    msgFileTypes: {
      image: "image",
      html: "HTML",
      text: "text",
      video: "video",
      audio: "audio",
      flash: "flash",
      pdf: "PDF",
      object: "object",
    },
    msgUploadAborted: "This file upload was aborted",
    msgUploadThreshold: "In progress &hellip;",
    msgUploadBegin: "Initialisation in progress &hellip;",
    msgUploadEnd: "Finish",
    msgUploadResume: "Continue uploading &hellip;",
    msgUploadEmpty: "Invalid file upload.",
    msgUploadError: "Upload error",
    msgDeleteError: "Delete error",
    msgProgressError: "Upload error",
    msgValidationError: "Error validation",
    msgLoading: "Loading file {index} Total {files} &hellip;",
    msgProgress: "Loading file {index} Total {files} - {percent}% Finished.",
    msgSelected: "{n} {files} selected",
    msgProcessing: "Processing ...",
    msgFoldersNotAllowed: "Drag and drop files only! Skip {n} dragged folders.",
    msgImageWidthSmall:
      'The width of the "{name}" of the image file must be at least {size} pixels.',
    msgImageHeightSmall:
      'The height of the "{name}" of the image file must be at least {size} pixels.',
    msgImageWidthLarge:
      'The width of the image file "{name}" must not exceed {size} pixels.',
    msgImageHeightLarge:
      'The height of the image file "{name}" must not exceed {size} pixels.',
    msgImageResizeError: "Unavailable image resizing.",
    msgImageResizeException:
      "An error occurred when resizing the image. <pre>{errors}</pre>",
    msgAjaxError: "{operation} an error has occurred. Please try again!",
    msgAjaxProgressError: "{operation} failed.",
    msgDuplicateFile:
      'File "{name}", size "{size}" has been selected. Ignore the same file.',
    msgResumableUploadRetriesExceeded:
      "File <b>{file}</b> upload failed more than <b>{max}</b>  retries! Error details: <pre>{error}</pre>",
    msgPendingTime: "{time} remain",
    msgCalculatingTime: "Calculate remaining time",
    ajaxOperations: {
      deleteThumb: "Delete file",
      uploadThumb: "Upload file",
      uploadBatch: "Batch upload",
      uploadExtra: "Form data upload",
    },
    dropZoneTitle:
      "Drag and drop files here &hellip;<br> Support multiple files uploading at the same time",
    dropZoneClickTitle: "<br>(or click the {files} button to select a file)",
    fileActionSettings: {
      removeTitle: "Delete file",
      uploadTitle: "Upload file",
      downloadTitle: "Download file",
      uploadRetryTitle: "Retry",
      rotateTitle: "Rotate 90 degrees clockwise",
      zoomTitle: "View details",
      dragTitle: "Move / Reset",
      indicatorNewTitle: "No uploads",
      indicatorSuccessTitle: "Upload",
      indicatorErrorTitle: "Upload failed",
      indicatorPausedTitle: "Upload has been paused",
      indicatorLoadingTitle: "Upload &hellip;",
    },
    previewZoomButtonTitles: {
      prev: "Preview the previous file",
      next: "Preview the next file",
      rotate: "Rotate 90 degrees clockwise",
      toggleheader: "Zoom",
      fullscreen: "Full screen",
      borderless: "Borderless mode",
      close: "Close the current preview",
    },
  };
});

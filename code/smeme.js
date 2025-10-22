const axios = require("axios");
const fs = require("fs");
const { ImageUploadService } = require("node-upload-images");

const handler = async (m, sock, { args, example, isRegis, reply, mess }) => {
  try {
    if (!isRegis) return reply(mess.regis);
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg
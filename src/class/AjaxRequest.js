/**
 * @module class/AjaxRequest
 */

const {XMLHttpRequest, FormData, JSON, Promise} = global;
const createErrorObject = (message, request, xhr) => ({message, request, xhr});

export default class AjaxRequest
{
    constructor(route)
    {
        this._route = route;
        this._expect = 'text';
        this._method = 'GET';
        this._xhr = null;
        this._headers = {};
    }

    get route()
    {
        return this._route;
    }

    get lastXhr()
    {
        return this._xhr;
    }

    addHeader(header, value)
    {
        this._headers[header] = value;
        return this;
    }

    expectText()
    {
        this._expect = 'text';
        return this;
    }

    expectJson()
    {
        this._expect = 'json';
        return this;
    }

    expectDocument()
    {
        this._expect = 'document';
        return this;
    }

    expectArrayBuffer()
    {
        this._expect = 'arraybuffer';
        return this;
    }

    expectBlob()
    {
        this._expect = 'blob';
        return this;
    }

    post(data)
    {
        this._method = 'POST';
        return this.send(data);
    }

    get()
    {
        this._method = 'GET';
        return this.send();
    }

    send(data)
    {
        if (this._method === 'POST' && typeof data === 'object' && !(data instanceof FormData))
        {
            const formData = new FormData();
            for (const key in data)
            {
                let value = data[key];
                const type = typeof value;

                if (type === 'function') { continue; }
                else if (type === 'object') { value = JSON.stringify(value); }
                else { value += ''; }

                formData.append(key, value);
            }
            data = formData;
        }

        return new Promise((resolve, reject) =>
        {
            const xhr = this.createXhr();
            xhr.onload = () =>
            {
                if (xhr.status !== 200)
                {
                    reject(createErrorObject(`${xhr.status}/${xhr.statusText}`, this, xhr));
                }
                else
                {
                    let {response} = xhr;
                    if (this._expect === 'json' && typeof response === 'string')
                    {
                        try
                        {
                            response = JSON.parse(response);
                        }
                        catch (error)
                        {
                            return;
                        }
                    }
                    resolve(response);
                }
            };
            xhr.onerror = () => reject(createErrorObject('Request failed', this, xhr));
            xhr.send(data);

            this._lastXhr = xhr;
        });
    }

    createXhr()
    {
        const xhr = new XMLHttpRequest();

        xhr.open(this._method, this._route, true);
        xhr.responseType = this._expect;

        for (const header in this._headers)
        {
            xhr.setRequestHeader(header, this._headers[header]);
        }

        return xhr;
    }
}

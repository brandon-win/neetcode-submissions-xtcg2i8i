class TrieNode {
    constructor() {
        this.children = {}
        this.endOfWord = false
    }
}


class PrefixTree {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {

        let curr = this.root

        for (let char of word) {
            let node = curr.children[char]
            if (!node) {
                node = curr.children[char] = new TrieNode()
            }
            curr = node
        }

        curr.endOfWord = true
        // curr will be the last letter of the word at this point. 
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root

        for (let char of word) {
            let node = curr.children[char]

            if (!node) {
                return false
            }

            curr = node
        }

        return curr.endOfWord
        // if endOfWord is false, that means another word exists along this path. 
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root

        for (let char of prefix) {
            let node = curr.children[char]

            if (!node) {
                return false
            }

            curr = node
        }

        return true


    }
}

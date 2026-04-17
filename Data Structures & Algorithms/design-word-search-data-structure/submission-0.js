class TrieNode {
    constructor() {
        this.children = {}
        this.endOfWord = false
    }
}


class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root

        for (let char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new TrieNode()
            }

            curr = curr.children[char]
        }

        curr.endOfWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const dfs = (index, node) => {
            if (index >= word.length) {
                return node.endOfWord
            }

            if (word[index] === '.') {
                const children = Object.values(node.children) 
                for (let child of children) {
                    if (dfs(index + 1, child)) {
                        return true
                    }
                }
            } else {
                if (node.children[word[index]]) {
                    if (dfs(index + 1, node.children[word[index]])) {
                        return true
                    }
                }

            }
            
            return false

        }



        return dfs(0, this.root)
    }


}
